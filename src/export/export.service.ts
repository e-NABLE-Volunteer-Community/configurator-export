import { Injectable } from '@nestjs/common';
import { StlFile } from './base-bom-exporter';
import { ExporterFactoryRegistry } from './exporter-factory-registry';
import { BillOfMaterials, ExportId } from '../bom-types-and-schemas';
import { WinstonLokiLoggerService } from '../logger/winston-loki-logger.service';
import { eNableConfiguratorError } from '@configurator/e-nable.configurator.common.errors';
import { InternalServerError } from '../errors';
import { ExportOutputService } from './output/export-output.service';
import { ExportStatusService } from './status/export-status.service';

@Injectable()
export class ExportService {
  constructor(
    private readonly logger: WinstonLokiLoggerService,
    private readonly exporterFactoryRegistry: ExporterFactoryRegistry,
    private readonly exportStatusService: ExportStatusService,
    private readonly exportOutputService: ExportOutputService,
  ) {}

  async exportBom(
    id: ExportId,
    billOfMaterials: BillOfMaterials,
  ): Promise<void> {
    this.logger.log('Exporting...', { id, location: billOfMaterials.location });

    try {
      const exporter = this.exporterFactoryRegistry.exporterForBom(
        id,
        billOfMaterials,
      );
      const stls: StlFile[] = await exporter.exportBom();
      this.logger.log('Finished exporting.');
      this.exportStatusService.exportZipping(id);
      await this.exportOutputService.saveStlsAndBomForExport(
        id,
        stls,
        billOfMaterials,
      );
      this.exportStatusService.exportCompleted(id);
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
