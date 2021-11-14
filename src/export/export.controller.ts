import { Body, Controller, Post, Req } from '@nestjs/common';
import { ExportService } from './export.service';
import { BillOfMaterials } from '../bom-types-and-schemas';
import * as uuid from 'uuid';

@Controller('export')
export class ExportController {
  constructor(private readonly exportService: ExportService) {}

  @Post()
  async export(@Body() bom: BillOfMaterials) {
    const id = uuid.v4();
    await this.exportService.exportBom(id, bom);
  }
}
