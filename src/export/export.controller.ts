import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  StreamableFile,
  Response,
} from '@nestjs/common';
import { ExportService } from './export.service';
import { BillOfMaterials, ExportId } from '../bom-types-and-schemas';
import * as uuid from 'uuid';
import { ExportPackagingService } from './output/export-packaging.service';

@Controller('export')
export class ExportController {
  constructor(
    private readonly exportService: ExportService,
    private readonly exportOutputService: ExportPackagingService,
  ) {}

  @Post()
  // @UseGuards(JwtAuthGuard)
  async initiateExport(@Body() bom: BillOfMaterials) {
    const id = uuid.v4();
    this.exportService.exportBom(id, bom).then();
    return id;
  }

  @Get(':id')
  // @UseGuards(JwtAuthGuard)
  retrieveOutput(
    @Param('id') exportId: ExportId,
    @Response({ passthrough: true }) res,
  ): StreamableFile {
    if (!exportId) throw new Error('No Export ID');
    const file = this.exportOutputService.getExportOutputFile(exportId);
    res.header('Content-Type', 'application/zip');
    res.header(
      'Content-disposition',
      `attachment; filename=${exportId + '.zip'}`,
    );
    return new StreamableFile(file);
  }
}
