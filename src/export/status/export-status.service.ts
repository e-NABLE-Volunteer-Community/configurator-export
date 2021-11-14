import { Injectable } from '@nestjs/common';
import { ExportId } from 'src/bom-types-and-schemas';
import {
  CompletedExportStatus,
  ExportingExportStatus,
  ExportStatus,
  FailedExportStatus,
  PartExportState,
  QueuedExportStatus,
  ZippingExportStatus,
} from './export-status-types';
import { PartName } from '../onshape/onshape-types';
import * as R from 'ramda';
import { BehaviorSubject, Observable } from 'rxjs';
import { InternalServerError } from '../../errors';
import { ExportNotFoundError, ExportTimedOutError } from './errors';
import { WinstonLokiLoggerService } from '../../logger/winston-loki-logger.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ExportStatusService {
  private readonly timeoutInMs: number;
  constructor(
    private readonly logger: WinstonLokiLoggerService,
    private readonly configService: ConfigService,
  ) {
    const timeoutInMs = parseInt(
      configService.get<string>('EXPORT_TIMEOUT_IN_MS') ?? '',
    );
    if (isNaN(timeoutInMs))
      throw new InternalServerError('Missing env var EXPORT_TIMEOUT_IN_MS');
    this.timeoutInMs = timeoutInMs;
  }

  private exports: Map<ExportId, BehaviorSubject<ExportStatus>> = new Map();

  public watchExportStatus(exportId: ExportId): Observable<ExportStatus> {
    return this.getSubject(exportId);
  }

  public exportQueued(exportId: ExportId): void {
    const initStatus: QueuedExportStatus = {
      exportId,
      state: 'queued',
      queuedAt: new Date(),
    };
    this.exports.set(exportId, new BehaviorSubject(initStatus));
  }

  public exportExporting(exportId: ExportId, partsNames: PartName[]): void {
    const queuedStatus = this.getExportStatus(exportId);
    if (queuedStatus.state !== 'queued')
      throw new InternalServerError(
        'Export was not queued when exportExporting was called',
      );
    const parts: Record<PartName, PartExportState> = R.fromPairs(
      R.map((name) => [name, 'pending'], partsNames),
    );
    const status: ExportingExportStatus = {
      ...queuedStatus,
      exportId,
      state: 'exporting',
      parts,
    };
    this.getSubject(exportId).next(status);
  }

  public partQueued(exportId: ExportId, partName: PartName): void {
    this.partStateWasUpdated(exportId, partName, 'queued');
  }

  public partExporting(exportId: ExportId, partName: PartName): void {
    this.partStateWasUpdated(exportId, partName, 'exporting');
  }

  public partExported(exportId: ExportId, partName: PartName): void {
    this.partStateWasUpdated(exportId, partName, 'exported');
  }

  private partStateWasUpdated(
    exportId: ExportId,
    partName: PartName,
    newState: PartExportState,
  ) {
    const status = this.getExportStatus(exportId);
    if (status.state !== 'exporting')
      throw new InternalServerError(
        'Export was not exporting when partStateWasUpdated was called',
      );

    this.getSubject(exportId).next({
      ...status,
      state: 'exporting',
      parts: { ...status.parts, [partName]: newState },
    });
  }

  public exportZipping(exportId: ExportId) {
    const prevStatus = this.getExportStatus(exportId);
    const status: ZippingExportStatus = {
      exportId,
      queuedAt: prevStatus.queuedAt,
      state: 'zipping',
    };
    this.getSubject(exportId).next(status);
  }

  public exportCompleted(exportId: ExportId) {
    const prevStatus = this.getExportStatus(exportId);
    const status: CompletedExportStatus = {
      exportId,
      queuedAt: prevStatus.queuedAt,
      state: 'completed',
      finalizedAt: new Date(),
    };
    this.getSubject(exportId).next(status);
  }

  public exportFailed(exportId: ExportId, error: Error) {
    const prevStatus = this.getExportStatus(exportId);
    const status: FailedExportStatus = {
      exportId,
      queuedAt: prevStatus.queuedAt,
      state: 'failed',
      finalizedAt: new Date(),
      error,
    };
    this.getSubject(exportId).next(status);
    this.logger.error('Export failed', { error, exportId });
  }

  private getSubject(exportId): BehaviorSubject<ExportStatus> {
    const optSubject = this.exports.get(exportId);
    if (optSubject === undefined) throw new ExportNotFoundError(exportId);
    return optSubject;
  }

  private getExportStatus(exportId: ExportId): ExportStatus {
    return this.getSubject(exportId).getValue();
  }

  public sweepOlderThan(date: Date) {
    this.logger.log('Sweeping export statuses older than ' + date.toString());
    for (const [exportId, subject] of this.exports) {
      const status = subject.getValue();
      if (status['finalizedAt'] < date) {
        subject.complete();
        this.exports.delete(exportId);
        continue;
      }
      if (status.queuedAt.getTime() < date.getTime() - this.timeoutInMs)
        this.exportFailed(exportId, new ExportTimedOutError(exportId));
    }
  }
}
