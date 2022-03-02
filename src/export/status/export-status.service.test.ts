import { ExportStatusService } from './export-status.service';
import * as uuid from 'uuid';
import { ExportNotFoundError, ExportTimedOutError } from './errors';
import { Test } from '@nestjs/testing';
import { WinstonLokiLoggerService } from '../../logger/winston-loki-logger.service';
import { ConfigService } from '@nestjs/config';

const sleepMs = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

describe('ExportStatusService', () => {
  let exportStatusService: ExportStatusService;
  let exportId: string;
  const watch = jest.fn();
  const partNames = ['part1', 'part2', 'part3'];

  const init = async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ConfigService],
      providers: [ConfigService, WinstonLokiLoggerService],
    }).compile();
    const logger = moduleRef.get(WinstonLokiLoggerService);
    const configService = moduleRef.get(ConfigService);
    jest.spyOn(configService, 'get').mockImplementation(() => '10');
    exportStatusService = new ExportStatusService(logger, configService);
    exportId = uuid.v4();
  };

  beforeAll(init);

  it('throws when attempting to watch a nonexistent export', () => {
    expect(() => exportStatusService.watchExportStatus(exportId)).toThrow(
      expect.any(ExportNotFoundError),
    );
  });

  // !!!!!!!!!!!!!!!!!!!!!
  // Must be run as a unit
  // !!!!!!!!!!!!!!!!!!!!!
  describe('Happy path', () => {
    it('updates export status state to queued', () => {
      exportStatusService.exportQueued(exportId);
      exportStatusService.watchExportStatus(exportId).subscribe(watch);

      expect(watch).toHaveBeenLastCalledWith(
        expect.objectContaining({
          exportId,
          state: 'queued',
          queuedAt: expect.any(Date),
        }),
      );
    });

    it('updates export status state to exporting', () => {
      exportStatusService.exportExporting(exportId, partNames);
      expect(watch).toHaveBeenLastCalledWith(
        expect.objectContaining({
          exportId,
          state: 'exporting',
          queuedAt: expect.any(Date),
          parts: { part1: 'pending', part2: 'pending', part3: 'pending' },
        }),
      );
    });

    it('updates part state to queued', () => {
      exportStatusService.partQueued(exportId, partNames[0]);
      expect(watch).toHaveBeenLastCalledWith(
        expect.objectContaining({
          exportId,
          state: 'exporting',
          queuedAt: expect.any(Date),
          parts: { part1: 'queued', part2: 'pending', part3: 'pending' },
        }),
      );
    });
    it('updates part state to exporting', () => {
      exportStatusService.partExporting(exportId, partNames[0]);
      expect(watch).toHaveBeenLastCalledWith(
        expect.objectContaining({
          exportId,
          state: 'exporting',
          queuedAt: expect.any(Date),
          parts: { part1: 'exporting', part2: 'pending', part3: 'pending' },
        }),
      );
    });
    it('updates part state to exported', () => {
      exportStatusService.partExported(exportId, partNames[0]);
      expect(watch).toHaveBeenLastCalledWith(
        expect.objectContaining({
          exportId,
          state: 'exporting',
          queuedAt: expect.any(Date),
          parts: { part1: 'exported', part2: 'pending', part3: 'pending' },
        }),
      );
    });

    it('updates export status state to exported', () => {
      exportStatusService.exportExported(exportId);
      expect(watch).toHaveBeenLastCalledWith(
        expect.objectContaining({
          exportId,
          state: 'exported',
          queuedAt: expect.any(Date),
        }),
      );
    });

    it('updates export status state to zipping', () => {
      exportStatusService.exportZipping(exportId);
      expect(watch).toHaveBeenLastCalledWith(
        expect.objectContaining({
          exportId,
          state: 'zipping',
          queuedAt: expect.any(Date),
        }),
      );
    });

    it('updates export status state to completed', () => {
      exportStatusService.exportCompleted(exportId);
      expect(watch).toHaveBeenLastCalledWith(
        expect.objectContaining({
          exportId,
          state: 'completed',
          queuedAt: expect.any(Date),
          finalizedAt: expect.any(Date),
        }),
      );
    });
  });

  it('updates export status state to failed', async () => {
    await init();
    exportStatusService.exportQueued(exportId);
    exportStatusService.watchExportStatus(exportId).subscribe(watch);
    const error = new Error();
    exportStatusService.exportFailed(exportId, error);
    expect(watch).toHaveBeenLastCalledWith(
      expect.objectContaining({
        exportId,
        state: 'failed',
        queuedAt: expect.any(Date),
        finalizedAt: expect.any(Date),
        error,
      }),
    );
  });

  it('sweeps old export status', async () => {
    await init();
    exportStatusService.exportQueued(exportId);
    exportStatusService.exportExporting(exportId, []);
    exportStatusService.exportZipping(exportId);
    exportStatusService.exportCompleted(exportId);
    exportStatusService.watchExportStatus(exportId).subscribe(watch);

    await sleepMs(10);

    exportStatusService.sweepOlderThan(new Date());
    expect(() => exportStatusService.watchExportStatus(exportId)).toThrow(
      ExportNotFoundError,
    );
  });

  it('times out old status which is not finalized', async () => {
    await init();
    exportStatusService.exportQueued(exportId);
    exportStatusService.watchExportStatus(exportId).subscribe(watch);

    // Timeout in this test is 10ms
    await sleepMs(15);

    exportStatusService.sweepOlderThan(new Date());
    expect(watch).toHaveBeenLastCalledWith(
      expect.objectContaining({
        exportId,
        state: 'failed',
        queuedAt: expect.any(Date),
        finalizedAt: expect.any(Date),
        error: expect.any(ExportTimedOutError),
      }),
    );
  });
});
