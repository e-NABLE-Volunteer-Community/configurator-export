import { Test } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { ExportOutputService } from './export-output.service';
import * as os from 'os';
import * as path from 'path';
import { StlFile } from '../base-bom-exporter';
import * as uuid from 'uuid';
import { Fusion360Bom } from '../fusion-360/fusion-360-bom-exporter';
import { BomLocationType } from '../exporter-factory-registry';
import * as fsp from 'fs/promises';
import * as R from 'ramda';
import extractZip from 'extract-zip';
import * as fs from 'fs';

//<editor-fold desc="Test data">
const validBom: Fusion360Bom = {
  name: 'Test Device',
  location: {
    type: BomLocationType.Fusion360,
    dir: 'TestDevice',
  },
  materials: {
    Test1: {
      instances: [
        {
          name: 'Widget_1',
          parameters: {
            diam: '34 mm',
          },
        },
      ],
    },
    Test2: {
      instances: [
        {
          name: 'Widget_2',
          parameters: {
            x: '10 mm',
            y: '20 mm',
            z: '30 mm',
          },
        },
        {
          name: 'Widget_3',
          parameters: {
            x: '10 mm',
            y: '10 mm',
            z: '10 mm',
          },
        },
      ],
    },
    Test3: {
      count: 2,
    },
  },
};
//</editor-fold>

describe('ExportOutputService', () => {
  let exportOutputService: ExportOutputService;
  let outputDir: string;

  const init = async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ConfigService],
    }).compile();
    const configService = moduleRef.get(ConfigService);
    const tempDir = os.tmpdir();
    outputDir = path.join(tempDir, 'export-output-service-tests', 'exports');
    jest.spyOn(configService, 'get').mockImplementation(() => outputDir);
    exportOutputService = new ExportOutputService(configService);
  };

  beforeAll(init);

  it('Saves STLs to output dir', async () => {
    const exportId = uuid.v4();
    const stls: StlFile[] = [
      { name: 'Test3-0.stl', data: Buffer.from('data') },
      { name: 'Test3-1.stl', data: Buffer.from('data') },
      { name: 'Widget_1.stl', data: Buffer.from('data') },
      { name: 'Widget_2.stl', data: Buffer.from('data') },
      { name: 'Widget_3.stl', data: Buffer.from('data') },
    ];
    await exportOutputService.saveStlsAndBomForExport(exportId, stls, validBom);
    console.log('saved');

    const outputDir = path.join(
      os.tmpdir(),
      'export-output-service-tests',
      'outputs',
    );
    await fsp.mkdir(outputDir, { recursive: true });
    const outputFile = path.join(outputDir, exportId + '.zip');
    const outputStream = fs.createWriteStream(outputFile);
    await exportOutputService.outputZipForExportToStream(
      exportId,
      outputStream,
    );
    console.log('outputted');

    const unzipDir = path.join(
      os.tmpdir(),
      'export-output-service-tests',
      'unzips',
      exportId,
    );
    await extractZip(outputFile, { dir: unzipDir });
    console.log('extracted');

    const outputContents = await fsp.readdir(unzipDir);
    const outputtedStls = await fsp.readdir(path.join(unzipDir, 'stls'));
    expect(outputContents).toEqual(['bom.json', 'stls']);
    expect(outputtedStls).toEqual(stls.map(R.prop('name')));
  });
});
