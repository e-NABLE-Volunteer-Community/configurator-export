import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { eNableHubStrategy } from './enable-hub.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';

export const jwtModule = JwtModule.registerAsync({
  useFactory: (config: ConfigService) => {
    return {
      secret: config.get<string>('JWT_SECRET_KEY'),
      signOptions: {
        expiresIn: config.get<string>('JWT_EXPIRATION_TIME'),
      },
    };
  },
  inject: [ConfigService],
});

@Module({
  imports: [UsersModule, PassportModule, jwtModule],
  providers: [AuthService, eNableHubStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
