import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { OauthService } from '../oauth.service';

export const forgeGetTokenUrl =
  'https://developer.api.autodesk.com/authentication/v1/gettoken';
export const forgeRefreshTokenUrl =
  'https://developer.api.autodesk.com/authentication/v1/refreshtoken';

@Injectable()
export class ForgeAuthService extends OauthService {
  constructor(httpService: HttpService, configService: ConfigService) {
    // TODO: Refactor when TypeScript 4.6 comes out
    super(httpService, {
      tokenUrl: forgeGetTokenUrl,
      refreshUrl: forgeRefreshTokenUrl,
      redirectUrl: configService.get('FORGE_REDIRECT_URL')!,
      clientId: configService.get('FORGE_CLIENT_ID')!,
      clientSecret: configService.get('FORGE_CLIENT_SECRET')!,
    });
  }
}
