import {
  eNableConfiguratorError,
  errorCode,
  errorType,
  ErrorTypes,
  ErrorCodes,
} from '@configurator/e-nable.configurator.common.errors';

export class InternalServerError extends eNableConfiguratorError<ErrorCodes.Unknown> {
  readonly [errorType]: ErrorTypes.InternalServerError;
  readonly [errorCode]: ErrorCodes.Unknown;

  constructor(message: string, protected readonly cause?: Error) {
    super(message);
  }
}
