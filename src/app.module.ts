import { Module } from '@nestjs/common';
import { ExportModule } from './export/export.module';
import { WinstonLokiLoggerModule } from './logger/winston-loki-logger.module';
import { ExportStatusModule } from './export/status/export-status.module';
import { authImports, authProviders } from './auth-providers';
import { OnshapeAuthModule } from './onshape-auth/onshape-auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health/health.controller';
import { ConfigService } from '@nestjs/config';
import { ExportOutputController } from './export-output/export-output.controller';

// const autoSchemaFile = path.join(process.cwd(), 'src/schema.gql');

@Module({
  imports: [
    ...authImports,

    // Logging/tracing/monitoring
    WinstonLokiLoggerModule,
    TerminusModule,

    // Devices GraphQL API
    // PrismaModule,
    // GraphQLModule.forRoot({ autoSchemaFile }),
    // DevicesModule,

    // Client
    OnshapeAuthModule,
    ServeStaticModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => [
        {
          rootPath: config.get('WEB_ROOT')!,
          exclude: ['/api*'],
        },
      ],
    }),

    // Export API
    ExportStatusModule,
    ExportModule,
  ],
  controllers: [HealthController, ExportOutputController],
  providers: [...authProviders],
})
export class AppModule {}
