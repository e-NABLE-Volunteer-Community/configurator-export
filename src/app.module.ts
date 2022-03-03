import { Module } from '@nestjs/common';
import { ExportModule } from './export/export.module';
import { WinstonLokiLoggerModule } from './logger/winston-loki-logger.module';
import { ExportStatusModule } from './export/status/export-status.module';
import { authImports, authProviders } from './auth-providers';
import { OnshapeAuthModule } from './onshape-auth/onshape-auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health/health.controller';
import path from 'path';

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
    ServeStaticModule.forRoot({
      rootPath: '/root/api/client',
    }),

    // Export API
    ExportStatusModule,
    ExportModule,

    // ForgeAuthModule,
  ],
  controllers: [HealthController],
  providers: [...authProviders],
})
export class AppModule {}
