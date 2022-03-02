import type { BaseBomExporter } from './base-bom-exporter.js';
import { BillOfMaterials } from '../bom-types-and-schemas.js';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { ExportStatusService } from './status/export-status.service';
import { AccessAndRefreshToken } from './onshape/base-onshape-api';

export enum BomLocationType {
  Fusion360 = 'Fusion360',
  Onshape = 'Onshape',
}

export interface BomLocation<L extends BomLocationType> {
  type: L;
}

export type MakeArgs<B extends BillOfMaterials> = {
  id: string;
  billOfMaterials: B;
  configService: ConfigService;
  exportStatusService: ExportStatusService;
  auth?: AccessAndRefreshToken;
};
export type ExporterFactory<
  B extends BillOfMaterials,
  L extends B extends BillOfMaterials<infer BL> ? BL : never,
> = {
  type: L;
  make: (args: MakeArgs<B>) => BaseBomExporter<B, L>;
};

@Injectable()
export class ExporterFactoryRegistry {
  constructor(
    private readonly configService: ConfigService,
    private readonly exportStatusService: ExportStatusService,
  ) {}

  private static exporterFactories: {
    [L in BomLocationType]?: ExporterFactory<BillOfMaterials<L>, L>;
  } = {};

  public exporterForBom<
    B extends BillOfMaterials,
    L extends B extends BillOfMaterials<infer BL> ? BL : never,
  >(
    id: string,
    billOfMaterials: B,
    auth?: AccessAndRefreshToken,
  ): BaseBomExporter<B, L> {
    const { type } = billOfMaterials.location;

    // Cast is safe, the key is pulled from exporter.locationType which
    // is guaranteed by compiler to match generic for exporter
    const factory = ExporterFactoryRegistry.exporterFactories[type] as
      | ExporterFactory<B, L>
      | undefined;
    if (!factory) throw new Error('No ExporterFactory for type: ' + type);

    return factory.make({
      id,
      billOfMaterials,
      configService: this.configService,
      exportStatusService: this.exportStatusService,
      auth,
    });
  }

  public static registerBomExporterFactory<
    B extends BillOfMaterials,
    L extends B extends BillOfMaterials<infer BL> ? BL : never,
  >(factory: ExporterFactory<B, L>): void {
    const type: L = factory.type;

    // Needs to be done as a redefining assignment because TypeScript does not
    // understand that it's safe to write an always value to a maybe type
    this.exporterFactories = Object.assign(this.exporterFactories, {
      [type]: factory,
    });
    console.info('Registered ExporterFactory for ' + type);
  }
}
