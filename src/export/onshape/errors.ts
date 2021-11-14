import { DeviceNotFoundError, InvalidBomLocationError } from '../errors.js'
import { ErrorObject } from 'ajv'

export class OnshapeDeviceNotFoundError extends DeviceNotFoundError {
  constructor(
    private readonly deviceName: string,
    private readonly documentId: string,
    private readonly workspaceId: string
  ) {
    super(
      `Device '${deviceName}' not found; looked for document/workspace with ids: ${documentId}/${workspaceId}'`
    )
  }
}

export class OnshapePartsNotFoundError extends DeviceNotFoundError {
  constructor(
    private readonly partNames: string[],
    private readonly deviceName: string
  ) {
    super(
      `Parts '${partNames.toString()}' for device '${deviceName}' not found`
    )
  }
}

export class OnshapeInvalidBomLocationError extends InvalidBomLocationError {
  constructor(
    private readonly errors: ErrorObject<any, any, any>[] | null | undefined
  ) {
    super(
      `Bill of materials location was invalid; ${JSON.stringify(
        errors,
        null,
        2
      )}`
    )
  }
}
