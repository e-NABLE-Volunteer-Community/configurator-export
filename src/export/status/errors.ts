import { LocalizedError, errorCode, errorType, ErrorTypes } from '../../error';
import { ErrorCodes } from '../../error-codes';
import { ExportId } from '../../bom-types-and-schemas';

export class ExportNotFoundError extends LocalizedError<ErrorCodes.ExportNotFound> {
  readonly [errorType]: ErrorTypes.NotFound;
  readonly [errorCode]: ErrorCodes.ExportNotFound;

  constructor(exportId: ExportId) {
    super(`Could not find export with ID: ${exportId}`);
  }
}

export class ExportTimedOutError extends LocalizedError<ErrorCodes.ExportTimedOut> {
  readonly [errorType]: ErrorTypes.InternalServerError;
  readonly [errorCode]: ErrorCodes.ExportTimedOut;

  constructor(exportId: ExportId) {
    super(`Export timed out with ID: ${exportId}`);
  }
}
