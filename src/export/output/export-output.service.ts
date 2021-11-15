import { Injectable } from '@nestjs/common';
import { BillOfMaterials, ExportId } from '../../bom-types-and-schemas';
import * as fsp from 'fs/promises';
import * as fs from 'fs';
import { StlFile } from '../base-bom-exporter';
import { ConfigService } from '@nestjs/config';
import { InternalServerError } from '../../errors';
import * as path from 'path';
import * as R from 'ramda';
import archiver from 'archiver';
import * as streams from 'stream';
import * as util from 'util';

export type OutputFile = { dir?: string; name: string; data: Buffer };

@Injectable()
export class ExportOutputService {
  private readonly outputDir: string;

  constructor(private readonly configService: ConfigService) {
    const outputDir = this.configService.get<string>('EXPORT_OUTPUT_DIR');
    if (!outputDir)
      throw new InternalServerError('Missing env var EXPORT_OUTPUT_DIR');
    this.outputDir = outputDir;
  }

  public async saveStlsAndBomForExport(
    exportId: ExportId,
    stls: StlFile[],
    billOfMaterials: BillOfMaterials,
  ): Promise<void> {
    const exportOutputPath = path.join(this.outputDir, exportId + '.zip');
    await fsp.mkdir(this.outputDir, { recursive: true });
    const writeStream = fs.createWriteStream(exportOutputPath);
    const bomOutputFile: OutputFile = {
      name: 'bom.json',
      data: Buffer.from(JSON.stringify(billOfMaterials, null, 2)),
    };
    const stlOutputFiles: OutputFile[] = stls.map(({ name, data }) => ({
      name,
      dir: 'stls',
      data,
    }));
    const files = [
      ...stlOutputFiles,
      ...(await this.extrasForBom(billOfMaterials)),
      bomOutputFile,
    ];
    await this.zipOutputsToStream(files, writeStream);
  }

  protected async extrasForBom(
    billOfMaterials: BillOfMaterials,
  ): Promise<OutputFile[]> {
    // TODO
    return [];
  }

  protected zipOutputsToStream(
    files: OutputFile[],
    stream: NodeJS.WritableStream,
  ): Promise<void> {
    const archive = archiver('zip', {
      zlib: { level: 9 }, // Sets the compression level.
    });
    archive.pipe(stream);
    files.forEach(({ dir, data: source, name }) => {
      const appendData = dir ? { name: path.join(dir, name) } : { name };
      archive.append(source, appendData);
    });
    return archive.finalize();
  }

  public async outputZipForExportToStream(
    exportId: ExportId,
    stream: NodeJS.WritableStream,
  ): Promise<void> {
    const pipeline = util.promisify(streams.pipeline);
    const exportOutputPath = path.join(this.outputDir, exportId + '.zip');
    await pipeline(fs.createReadStream(exportOutputPath), stream);
  }
}
