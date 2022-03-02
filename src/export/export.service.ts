import { Injectable } from '@nestjs/common';
import { StlFile } from './base-bom-exporter';
import { ExporterFactoryRegistry } from './exporter-factory-registry';
import { BillOfMaterials, ExportId } from '../bom-types-and-schemas';
import { WinstonLokiLoggerService } from '../logger/winston-loki-logger.service';
import { InternalServerError } from '../errors';
import { ExportPackagingService } from './output/export-packaging.service';
import { ExportStatusService } from './status/export-status.service';
import { eNableConfiguratorError } from '../error';
import { AccessAndRefreshToken } from './onshape/base-onshape-api';

@Injectable()
export class ExportService {
  constructor(
    private readonly logger: WinstonLokiLoggerService,
    private readonly exporterFactoryRegistry: ExporterFactoryRegistry,
    private readonly exportStatusService: ExportStatusService,
    private readonly exportOutputService: ExportPackagingService,
  ) {}

  async exportBom(
    id: ExportId,
    billOfMaterials: BillOfMaterials,
  ): Promise<void> {
    this.logger.log('Exporting...', { id, location: billOfMaterials.location });

    try {
      const auth = billOfMaterials.authorization;
      const exporter = this.exporterFactoryRegistry.exporterForBom(
        id,
        billOfMaterials,
        auth,
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
