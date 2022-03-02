import { Module } from '@nestjs/common';
import { ExportModule } from './export/export.module';
import { WinstonLokiLoggerModule } from './logger/winston-loki-logger.module';
import { ExportStatusModule } from './export/status/export-status.module';
import { ForgeAuthModule } from './forge-auth/forge-auth.module';
import { DevicesModule } from './devices/devices.module';
// import { GraphQLModule } from '@nestjs/graphql';
import * as path from 'path';
import { PrismaModule } from './prisma.module';
import { authImports, authProviders } from './auth-providers';
import { OnshapeAuthModule } from './onshape-auth/onshape-auth.module';

const autoSchemaFile = path.join(process.cwd(), 'src/schema.gql');

@Module({
  imports: [
    ...authImports,
    // PrismaModule,
    // GraphQLModule.forRoot({ autoSchemaFile }),
    WinstonLokiLoggerModule,
    ForgeAuthModule,
    ExportStatusModule,
    ExportModule,
    OnshapeAuthModule,
    // DevicesModule,
  ],
  controllers: [],
  providers: [...authProviders],
})
export class AppModule {}
