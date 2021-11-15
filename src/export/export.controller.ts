import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { ExportService } from './export.service';
import { BillOfMaterials, ExportId } from '../bom-types-and-schemas';
import * as uuid from 'uuid';
import { Response } from 'express';
import { ExportOutputService } from './output/export-output.service';

@Controller('export')
export class ExportController {
  constructor(
    private readonly exportService: ExportService,
    private readonly exportOutputService: ExportOutputService,
  ) {}

  @Post()
  async initiateExport(@Body() bom: BillOfMaterials) {
    const id = uuid.v4();
    this.exportService.exportBom(id, bom).then();
    return id;
  }

  @Get(':id')
  async retrieveOutput(@Param('id') exportId: ExportId, @Res() res: Response) {
    if (!exportId) throw new Error('No Export ID');
    await this.exportOutputService.outputZipForExportToStream(exportId, res);
    res.writeHead(200, {
      'Content-Type': 'application/zip',
      'Content-disposition': 'attachment; filename=myFile.zip',
    });
    res.end();
  }
}
