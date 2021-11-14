import { Injectable } from '@nestjs/common';
import { StlFile } from './base-bom-exporter';
import { ExporterFactoryRegistry } from './exporter-factory-registry';
import { BillOfMaterials, ExportId } from '../bom-types-and-schemas';
import { WinstonLokiLoggerService } from '../logger/winston-loki-logger.service';
import { eNableConfiguratorError } from '@configurator/e-nable.configurator.common.errors';
import { InternalServerError } from '../errors';

@Injectable()
export class ExportService {
  constructor(
    private readonly logger: WinstonLokiLoggerService,
    private readonly exporterFactoryRegistry: ExporterFactoryRegistry,
  ) {}

  async exportBom(
    id: ExportId,
    billOfMaterials: BillOfMaterials,
  ): Promise<StlFile[]> {
    this.logger.log('Exporting...', { id, location: billOfMaterials.location });

    try {
      const exporter = this.exporterFactoryRegistry.exporterForBom(
        id,
        billOfMaterials,
      );
      const stls: StlFile[] = await exporter.exportBom();
      this.logger.log('Finished exporting.');
      return stls;
    } catch (e) {
      if (e instanceof eNableConfiguratorError) {
        throw e;
      }
      throw new InternalServerError(
        `Unknown error while exporting: ${
          e instanceof Error ? e.message : JSON.stringify(e)
        }`,
        e,
      );
    }
  }
}
