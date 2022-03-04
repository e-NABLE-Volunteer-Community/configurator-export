import { Test, TestingModule } from '@nestjs/testing';
import { ExportOutputController } from './export-output.controller';

describe('ExportOutputController', () => {
  let controller: ExportOutputController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExportOutputController],
    }).compile();

    controller = module.get<ExportOutputController>(ExportOutputController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
