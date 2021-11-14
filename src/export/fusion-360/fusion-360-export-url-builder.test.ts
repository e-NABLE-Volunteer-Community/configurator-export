import { Fusion360ExportUrlBuilder } from './fusion-360-export-url-builder';
import { Test } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { Fusion360FileService } from './fusion-360-bom-exporter';

describe('fusion-360/fusion-360-export-url-builder', () => {
  const outputDir = '/out';
  const deviceDir = '/in/device';

  let fileService: Fusion360FileService;
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ConfigService],
    }).compile();
    const configService = moduleRef.get(ConfigService);
    jest.spyOn(configService, 'get').mockImplementation(() => '/in');
    fileService = new Fusion360FileService(configService);
    jest.spyOn(fileService, 'getOutputDir').mockImplementation(() => outputDir);
  });

  describe('Fusion360ExportURLBuilder', () => {
    describe('urlForDeviceDirAndPartName', () => {
      it('returns appropriate URL for test part name', () => {
        const builder = new Fusion360ExportUrlBuilder(fileService);

        const expected =
          'fusion360://host/?command=open&file=%2Fin%2Fdevice%2Fpart1.f3d&privateInfo=%7B%22filename%22%3A%22part1.stl%22%2C%22outputDir%22%3A%22%2Fout%22%7D';

        const actual = builder.urlForDeviceDirAndPartName(deviceDir, 'part1');
        const actualUrl = new URL(actual);
        const expectedUrl = new URL(expected);
        expect(actualUrl.searchParams).toStrictEqual(expectedUrl.searchParams);
        expect(actualUrl.pathname).toStrictEqual(expectedUrl.pathname);
      });
    });

    describe('urlForDeviceDirPartNameAndInstance', () => {
      it('returns appropriate URL for test part name and instance', () => {
        const builder = new Fusion360ExportUrlBuilder(fileService);

        const expected =
          'fusion360://host/?command=open&file=%2Fin%2Fdevice%2Fpart1.f3d&privateInfo=%7B%22filename%22%3A%22widget1.stl%22%2C%22outputDir%22%3A%22%2Fout%22%2C%22parameters%22%3A%7B%22diam%22%3A%2235%20mm%22%7D%7D';

        const actual = builder.urlForDeviceDirPartNameAndInstance(
          deviceDir,
          'part1',
          {
            name: 'widget1',
            parameters: { diam: '35 mm' },
          },
        );
        const actualUrl = new URL(actual);
        const expectedUrl = new URL(expected);
        expect(actualUrl.searchParams).toStrictEqual(expectedUrl.searchParams);
        expect(actualUrl.pathname).toStrictEqual(expectedUrl.pathname);
      });
    });
  });
});
