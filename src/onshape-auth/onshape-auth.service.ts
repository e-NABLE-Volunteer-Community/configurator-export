import { Injectable } from '@nestjs/common';
import { OauthService } from '../oauth.service';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

const onshapeGetTokenUrl = 'https://oauth.onshape.com/oauth/token';

@Injectable()
export class OnshapeAuthService extends OauthService {
  constructor(httpService: HttpService, configService: ConfigService) {
    // TODO: Refactor when TypeScript 4.6 comes out
    super(httpService, {
      tokenUrl: onshapeGetTokenUrl,
      refreshUrl: onshapeGetTokenUrl,
      redirectUrl: configService.get('ONSHAPE_REDIRECT_URL')!,
      clientId: configService.get('ONSHAPE_CLIENT_ID')!,
      clientSecret: configService.get('ONSHAPE_CLIENT_SECRET')!,
    });
  }
}
