import type { BaseBomExporter } from './base-bom-exporter.js';
import { BillOfMaterials } from '../bom-types-and-schemas.js';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

export enum BomLocationType {
  Fusion360 = 'Fusion360',
  Onshape = 'Onshape',
}
export interface BomLocation<L extends BomLocationType> {
  type: L;
}

export type ExporterFactory<
  B extends BillOfMaterials,
  L extends B extends BillOfMaterials<infer BL> ? BL : never,
> = {
  type: L;
  make: (
    id: string,
    billOfMaterials: B,
    configService: ConfigService,
  ) => BaseBomExporter<B, L>;
};

@Injectable()
export class ExporterFactoryRegistry {
  constructor(private readonly configService: ConfigService) {}

  private static exporterFactories: {
    [L in BomLocationType]?: ExporterFactory<BillOfMaterials<L>, L>;
  } = {};

  public exporterForBom<
    B extends BillOfMaterials,
    L extends B extends BillOfMaterials<infer BL> ? BL : never,
  >(id: string, billOfMaterials: B): BaseBomExporter<B, L> {
    const { type } = billOfMaterials.location;

    // Cast is safe, the key is pulled from exporter.locationType which
    // is guaranteed by compiler to match generic for exporter
    const factory = ExporterFactoryRegistry.exporterFactories[type] as
      | ExporterFactory<B, L>
      | undefined;
    if (!factory) throw new Error('No ExporterFactory for type: ' + type);

    return factory.make(id, billOfMaterials, this.configService);
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
