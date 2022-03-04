import { LocalizedError, errorCode, errorType, ErrorTypes } from './error';
import { ErrorCodes } from './error-codes';

export class InternalServerError extends LocalizedError<ErrorCodes.Unknown> {
  readonly [errorType]: ErrorTypes.InternalServerError;
  readonly [errorCode]: ErrorCodes.Unknown;

  constructor(message: string, protected readonly cause?: Error) {
    super(message);
  }
}
