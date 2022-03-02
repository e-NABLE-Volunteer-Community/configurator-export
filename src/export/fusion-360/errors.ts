import {
  DeviceNotFoundError,
  InvalidBomLocationError,
  PartsNotFoundError,
} from '../errors';
import { ErrorObject } from 'ajv';

export class Fusion360DeviceNotFoundError extends DeviceNotFoundError {
  constructor(
    private readonly deviceName: string,
    private readonly deviceDir: string,
  ) {
    super(
      `Device '${deviceName}' not found; looked for device directory '${deviceDir}'`,
    );
  }
}

export class Fusion360PartsNotFoundError extends PartsNotFoundError {
  constructor(
    private readonly partNames: string[],
    private readonly deviceName: string,
  ) {
    super(
      `Parts '${partNames.toString()}' for device '${deviceName}' not found`,
    );
  }
}

export class Fusion360InvalidBomLocationError extends InvalidBomLocationError {
  constructor(
    private readonly errors: ErrorObject<any, any, any>[] | null | undefined,
  ) {
    super(
      `Bill of materials location was invalid; ${JSON.stringify(
        errors,
        null,
        2,
      )}`,
    );
  }
}
