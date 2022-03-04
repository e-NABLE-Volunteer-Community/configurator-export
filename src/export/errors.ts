import { LocalizedError, errorCode, errorType, ErrorTypes } from '../error';
import { ErrorCodes } from '../error-codes';
import { ErrorObject } from 'ajv';

export class InvalidBomError extends LocalizedError<ErrorCodes.InvalidBom> {
  readonly [errorCode] = ErrorCodes.InvalidBom;
  readonly [errorType] = ErrorTypes.BadRequest;

  constructor(
    private readonly errors: ErrorObject<any, any, any>[] | null | undefined,
  ) {
    super(`Bill of materials was invalid`);
  }
}

export abstract class InvalidBomLocationError extends LocalizedError<ErrorCodes.InvalidBomLocation> {
  readonly [errorCode] = ErrorCodes.InvalidBomLocation;
  readonly [errorType] = ErrorTypes.BadRequest;

  protected constructor(message: string) {
    super(message);
  }
}

export abstract class DeviceNotFoundError extends LocalizedError<ErrorCodes.DeviceNotFound> {
  readonly [errorCode] = ErrorCodes.DeviceNotFound;
  readonly [errorType] = ErrorTypes.NotFound;

  protected constructor(message: string) {
    super(message);
  }
}

export abstract class PartsNotFoundError extends LocalizedError<ErrorCodes.PartNotFound> {
  readonly [errorCode] = ErrorCodes.PartNotFound;
  readonly [errorType] = ErrorTypes.NotFound;

  protected constructor(message: string) {
    super(message);
  }
}
