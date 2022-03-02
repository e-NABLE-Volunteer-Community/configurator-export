import { ErrorCodes } from './error-codes.js';

// Used in lieu of HTTP status codes to decouple errors from HTTP
export enum ErrorTypes {
  // 400s
  BadRequest,
  Unauthorized,
  Forbidden,
  NotFound,
  Conflict,
  TooManyRequests,

  // 500s
  InternalServerError,
  ServiceUnavailable,
}

export const errorCode: unique symbol = Symbol("errorCode");
export const errorType: unique symbol = Symbol("errorType");
export interface CodedError<C extends ErrorCodes> {
  [errorType]: ErrorTypes;
  [errorCode]: C;
}

export abstract class eNableConfiguratorError<C extends ErrorCodes>
  extends Error
  implements CodedError<C>
{
  abstract [errorType]: ErrorTypes;
  abstract [errorCode]: C;

  protected constructor(
    readonly message: string,
    readonly extras?: {
      status?: number;
    }
  ) {
    super(message);
    this.name = this.constructor.name;
  }
}
//noop
