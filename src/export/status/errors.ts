import {
  eNableConfiguratorError,
  errorCode,
  ErrorCodes,
  errorType,
  ErrorTypes,
} from '@configurator/e-nable.configurator.common.errors';
import { ExportId } from '../../bom-types-and-schemas';

export class ExportNotFoundError extends eNableConfiguratorError<ErrorCodes.ExportNotFound> {
  readonly [errorType]: ErrorTypes.NotFound;
  readonly [errorCode]: ErrorCodes.ExportNotFound;

  constructor(exportId: ExportId) {
    super(`Could not find export with ID: ${exportId}`);
  }
}

export class ExportTimedOutError extends eNableConfiguratorError<ErrorCodes.ExportTimedOut> {
  readonly [errorType]: ErrorTypes.InternalServerError;
  readonly [errorCode]: ErrorCodes.ExportTimedOut;

  constructor(exportId: ExportId) {
    super(`Export timed out with ID: ${exportId}`);
  }
}
