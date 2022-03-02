import { ConfigService } from '@nestjs/config';

export const configServiceTestProvider = {
  provide: ConfigService,
  useValue: {
    get: jest.fn((envVar: string) => {
      if (envVar === 'ONSHAPE_PUBLIC_API_KEY') return 'public-key';
      if (envVar === 'ONSHAPE_PRIVATE_API_KEY') return 'private-key';
      if (envVar === 'FUSION_FILES_DIR')
        return './src/export/fusion-360/test-data/fusion-360-files';
      if (envVar === 'EXPORT_OUTPUT_DIR') return './output';
      // Loki variables are intentionally omitted
      if (envVar === 'EXPORT_TIMEOUT_IN_MS') return 60000;
      throw new Error('No test value for env var ' + envVar);
    }),
  },
};
