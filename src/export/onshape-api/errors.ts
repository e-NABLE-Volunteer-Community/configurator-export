import { DeviceNotFoundError, InvalidBomLocationError } from '../errors';
import { ErrorObject } from 'ajv';
import { BillOfMaterials } from '../../bom-types-and-schemas';

export class OnshapeDeviceNotFoundError extends DeviceNotFoundError {
  private readonly deviceName: string;
  private readonly documentId: string;
  private readonly workspaceId: string;

  constructor(readonly bom: BillOfMaterials) {
    super(
      `Device '${bom.name}' not found; looked for document/workspace with ids: ${bom.location.documentId}/${bom.location.workspaceId}`,
    );

    this.deviceName = bom.name;
    this.documentId = bom.location.documentId;
    this.workspaceId = bom.location.workspaceId;
  }
}

export class OnshapePartsNotFoundError extends DeviceNotFoundError {
  constructor(
    private readonly partNames: string[],
    private readonly deviceName: string,
  ) {
    super(`Parts ${partNames.toString()} for device '${deviceName}' not found`);
  }
}

export class OnshapeInvalidBomLocationError extends InvalidBomLocationError {
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
