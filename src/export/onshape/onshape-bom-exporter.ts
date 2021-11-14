import * as R from 'ramda';
import Ajv, { JSONSchemaType } from 'ajv';

import { OnshapeApi } from './onshape-api.js';
import { BaseBomExporter, StlFile } from '../base-bom-exporter.js';
import {
  DocumentId,
  ElementId,
  Part,
  PartName,
  WorkspaceId,
} from './onshape-types.js';
import {
  BomLocation,
  BomLocationType,
  ExporterFactoryRegistry,
} from '../exporter-factory-registry.js';
import {
  BillOfMaterials,
  ConfiguredBomLine,
  DefaultBomLine,
} from '../../bom-types-and-schemas.js';
import {
  OnshapeDeviceNotFoundError,
  OnshapeInvalidBomLocationError,
  OnshapePartsNotFoundError,
} from './errors.js';
import { InternalServerError } from '../../errors.js';
import { ConfigService } from '@nestjs/config';

export interface OnshapeBom extends BillOfMaterials<BomLocationType.Onshape> {
  location: OnshapeBomLocation;
}

export interface OnshapeBomLocation
  extends BomLocation<BomLocationType.Onshape> {
  type: BomLocationType.Onshape;
  documentId: DocumentId;
  workspaceId: WorkspaceId;
}

const OnshapeBomLocationSchema: JSONSchemaType<OnshapeBomLocation> = {
  type: 'object',
  properties: {
    type: { type: 'string', const: BomLocationType.Onshape },
    documentId: { type: 'string' },
    workspaceId: { type: 'string' },
  },
  additionalProperties: false,
  required: ['type', 'documentId', 'workspaceId'],
};

ExporterFactoryRegistry.registerBomExporterFactory<
  OnshapeBom,
  BomLocationType.Onshape
>({
  type: BomLocationType.Onshape,
  make: (id: string, bom: OnshapeBom, configService: ConfigService) => {
    const api = new OnshapeApi(configService);
    return new OnshapeBomExporter(id, bom, api);
  },
});

export class OnshapeBomExporter extends BaseBomExporter<
  OnshapeBom,
  BomLocationType.Onshape
> {
  private static readonly validateBomLocation = new Ajv().compile(
    OnshapeBomLocationSchema,
  );

  public readonly locationType = BomLocationType.Onshape;
  private readonly partsForWorkspacePromise: Promise<
    Part[] | { status: number }
  >;
  private readonly documentId: DocumentId;
  private readonly workspaceId: WorkspaceId;

  constructor(
    protected readonly exportId: string,
    protected readonly billOfMaterials: OnshapeBom,
    private readonly api: OnshapeApi,
  ) {
    super(exportId, billOfMaterials);
    this.documentId = this.billOfMaterials.location.documentId;
    this.workspaceId = this.billOfMaterials.location.workspaceId;
    this.partsForWorkspacePromise = this.api.getPartsForWorkspace(
      this.documentId,
      this.workspaceId,
    );
  }

  /**
   This method is NOT tasked with ensuring the device described by the location
   is available. It is ONLY responsible for ensuring that the structure of the
   location object is correct.
   */
  protected verifyBomLocationStructureIsValid(location: OnshapeBomLocation) {
    if (OnshapeBomExporter.validateBomLocation(location)) return;
    throw new OnshapeInvalidBomLocationError(
      OnshapeBomExporter.validateBomLocation.errors,
    );
  }

  protected async verifyDeviceAndAllPartsAreAvailable(): Promise<void> {
    const parts = await this.getPartsOrThrow();
    const availableParts = parts.map(R.prop('name'));
    const expectedParts = R.keys(this.billOfMaterials.materials);

    const missingParts = R.difference(expectedParts, availableParts);
    if (missingParts.length)
      throw new OnshapePartsNotFoundError(
        missingParts,
        this.billOfMaterials.name,
      );
  }

  private async getPartsOrThrow(): Promise<Part[]> {
    const parts = await this.partsForWorkspacePromise;
    if ('status' in parts) {
      if (parts.status === 404)
        throw new OnshapeDeviceNotFoundError(
          this.billOfMaterials.name,
          this.documentId,
          this.workspaceId,
        );
      throw new InternalServerError(
        'Did not get back parts; Status: ' + parts.status,
      );
    }
    return parts;
  }

  protected async stlsForDefaultLine(
    partName: PartName,
    line: DefaultBomLine,
  ): Promise<StlFile[]> {
    const elementId = await this.elementIdForPartWithName(partName);

    let i = 0;
    const stls: StlFile[] = [];
    const data = await this.stlDataForElement(elementId);
    R.times(
      () => ({ name: `${partName}-${i++}.stl`, data }),
      line.count,
    ).forEach((stl) => stls.push(stl));

    console.info(`Exported ${partName}.`);
    return stls;
  }

  protected async stlsForConfiguredLine(
    partName: PartName,
    line: ConfiguredBomLine,
  ): Promise<StlFile[]> {
    const elementId = await this.elementIdForPartWithName(partName);

    const stlPromises: Promise<StlFile>[] = [];
    for (const instance of line.instances) {
      const dataProm = this.stlDataForElementWithConfiguration(
        elementId,
        instance.parameters,
      );
      stlPromises.push(
        dataProm
          .then((data) => ({ name: instance.name + '.stl', data }))
          .then((file) => {
            console.info(`Exported ${instance.name}.`);
            return file;
          }),
      );
    }
    return Promise.all(stlPromises);
  }

  private async elementIdForPartWithName(partName: string): Promise<ElementId> {
    const parts = await this.getPartsOrThrow();
    const part = parts.find(R.propEq('name', partName));

    // This should never be thrown as we already checked for a part with this
    // name. For this reason, we thrown an InternalServerError instead of 404
    if (!part)
      throw new InternalServerError(
        'Could not find part with name: ' + partName,
      );
    return part.elementId;
  }

  private async stlDataForElement(elementId: ElementId): Promise<string> {
    return await this.api.exportPartAsStl(
      this.documentId,
      this.workspaceId,
      elementId,
    );
  }

  private async stlDataForElementWithConfiguration(
    elementId: ElementId,
    parameters: Record<string, string>,
  ): Promise<string> {
    const encodedConfiguration = await this.api.encodeConfiguration(
      this.documentId,
      elementId,
      parameters,
    );
    return await this.api.exportPartAsStlWithConfiguration(
      this.documentId,
      this.workspaceId,
      elementId,
      encodedConfiguration,
    );
  }
}
