import { Injectable } from '@nestjs/common';
import { OauthService } from '../oauth.service';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

const onshapeGetTokenUrl = 'https://oauth.onshape.com/oauth/token';

@Injectable()
export class OnshapeAuthService extends OauthService {
  constructor(httpService: HttpService, configService: ConfigService) {
    const tokenUrl = onshapeGetTokenUrl;
    const refreshUrl = onshapeGetTokenUrl;
    const redirectUrl = configService.get('ONSHAPE_REDIRECT_URL')!;
    const clientId = configService.get('ONSHAPE_CLIENT_ID')!;
    const clientSecret = configService.get('ONSHAPE_CLIENT_SECRET')!;

    const config = {
      tokenUrl,
      refreshUrl,
      redirectUrl,
      clientId,
      clientSecret,
    };

    super(httpService, config);
  }
}
