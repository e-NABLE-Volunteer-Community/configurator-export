import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { DynamicModule } from '@nestjs/common';

export const authProviders = [
  // { provide: APP_GUARD, useClass: JwtAuthGuard },
  // { provide: APP_GUARD, useClass: AdminGuard },
];

export const authImports = [
  ConfigModule.forRoot({ isGlobal: true }),
  AuthModule,
];
