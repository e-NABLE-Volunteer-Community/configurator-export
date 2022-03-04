import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ExportService } from './export.service';
import { Test } from '@nestjs/testing';
import { authImports, authProviders } from '../auth-providers';
import { ExportController } from './export.controller';
import { createMock } from '@golevelup/ts-jest';
import { getAuthHeaders, Requester } from '../../test/test-authentication';
import phoenixV3OnshapeBom from './onshape-api/test-data/onshape-boms/phoenix-v3-test-bom.json';
import SpyInstance = jest.SpyInstance;

describe('ExportController', () => {
  describe(`POST /export`, () => {
    let app: NestFastifyApplication;
    let exportService: ExportService;
    let exportSpy: SpyInstance;

    beforeEach(async () => {
      const module = await Test.createTestingModule({
        imports: [...authImports],
        controllers: [ExportController],
        providers: [...authProviders],
      })
        .useMocker(createMock)
        .compile();

      exportService = module.get<ExportService>(ExportService);

      exportSpy = jest
        .spyOn(exportService, 'initiateExport')
        .mockImplementation(async () => {});

      app = module.createNestApplication<NestFastifyApplication>(
        new FastifyAdapter(),
      );
      await app.init();
      await app.getHttpAdapter().getInstance().ready();
    });

    type Case = {
      requester: Requester;
      status: number;
      result: string;
    };
    const cases: Case[] = [
      { requester: 'unauthenticated', status: 401, result: 'throws' },
      { requester: 'user', status: 201, result: 'returns export ID' },
      { requester: 'admin', status: 201, result: 'returns export ID' },
    ];
    it.each(cases)(`as $requester $result`, async ({ requester, status }) => {
      const headers = await getAuthHeaders(requester);
      await app
        .inject()
        .post('/export')
        .headers(headers)
        .body(phoenixV3OnshapeBom)
        .end()
        .then(({ statusCode, payload }) => {
          expect(statusCode).toEqual(status);
        });
      if (status === 401) return expect(exportSpy).not.toHaveBeenCalled();
      expect(exportSpy).toHaveBeenCalledWith(
        expect.any(String),
        phoenixV3OnshapeBom,
      );
    });
  });
});
