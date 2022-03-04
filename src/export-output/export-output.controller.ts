import {
  Controller,
  Get,
  Param,
  Response,
  StreamableFile,
} from '@nestjs/common';
import { ExportId } from '../bom-types-and-schemas';
import { ExportPackagingService } from '../export/output/export-packaging.service';

@Controller('export-output')
export class ExportOutputController {
  constructor(
    private readonly exportPackagingService: ExportPackagingService,
  ) {}

  @Get(':id')
  // @UseGuards(JwtAuthGuard)
  retrieveOutput(
    @Param('id') exportId: ExportId,
    @Response({ passthrough: true }) res,
  ): StreamableFile {
    if (!exportId) throw new Error('No Export ID');
    const file = this.exportPackagingService.getExportOutputFile(exportId);
    res.header('Content-Type', 'application/zip');
    res.header(
      'Content-disposition',
      `attachment; filename=${exportId + '.zip'}`,
    );
    return new StreamableFile(file);
  }
}
