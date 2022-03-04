import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  StreamableFile,
  Response,
  BadRequestException,
  Inject,
  Scope,
} from '@nestjs/common';
import { ExportService } from './export.service';
import {
  BillOfMaterials,
  BillOfMaterialsSchema,
  ExportId,
} from '../bom-types-and-schemas';
import * as uuid from 'uuid';
import { ExportPackagingService } from './output/export-packaging.service';
import Ajv from 'ajv';
import { REQUEST } from '@nestjs/core';

@Controller('export')
export class ExportController {
  constructor(
    private readonly exportService: ExportService,
    private readonly exportOutputService: ExportPackagingService,
  ) {}

  private static readonly validateBom = new Ajv().compile(
    BillOfMaterialsSchema,
  );

  @Post()
  // @UseGuards(JwtAuthGuard)
  async initiateExport(@Body() bom: BillOfMaterials): Promise<string> {
    if (!ExportController.validateBom(bom))
      throw new BadRequestException('Bill of materials was malformed');
    return this.exportService.initiateExport();
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
