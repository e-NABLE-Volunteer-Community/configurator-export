import { ExportId } from 'src/bom-types-and-schemas';
import { PartName } from '../onshape/onshape-types';

export type ExportStatusState =
  | 'queued'
  | 'exporting'
  | 'zipping'
  | 'completed'
  | 'failed';

type BaseExportStatus = {
  exportId: ExportId;
  state: ExportStatusState;
  queuedAt: Date;
};

type FinalizedExportStatus = BaseExportStatus & {
  finalizedAt: Date;
};

export type QueuedExportStatus = BaseExportStatus & {
  state: 'queued';
};

export type PartExportState = 'pending' | 'queued' | 'exporting' | 'exported';
export type ExportingExportStatus = BaseExportStatus & {
  state: 'exporting';
  parts: Record<PartName, PartExportState>;
};

export type ZippingExportStatus = BaseExportStatus & {
  state: 'zipping';
};

export type CompletedExportStatus = FinalizedExportStatus & {
  state: 'completed';
};

export type FailedExportStatus = FinalizedExportStatus & {
  state: 'failed';
  error: Error;
};

export type ExportStatus =
  | QueuedExportStatus
  | ExportingExportStatus
  | ZippingExportStatus
  | CompletedExportStatus
  | FailedExportStatus;
