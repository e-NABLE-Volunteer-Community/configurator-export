import { HttpService } from '@nestjs/axios';
import * as qs from 'qs';
import { firstValueFrom } from 'rxjs';
import { InternalServerErrorException } from '@nestjs/common';

export type OauthServiceConfig = {
  tokenUrl: string;
  refreshUrl: string;
  redirectUrl: string;
  clientId: string;
  clientSecret: string;
};

export type AuthResponse = {
  accessToken: string;
  refreshToken: string;
};

export class OauthService {
  constructor(
    private readonly httpService: HttpService,
    private readonly config: OauthServiceConfig,
  ) {}

  public async getToken(code: string): Promise<AuthResponse> {
    const data = qs.stringify({
      client_id: this.config.clientId,
      client_secret: this.config.clientSecret,
      grant_type: 'authorization_code',
      redirect_uri: this.config.redirectUrl,
      code,
    });
    const headers = { 'content-type': 'application/x-www-form-urlencoded' };
    try {
      const res = await firstValueFrom(
        this.httpService.post(this.config.tokenUrl, data, { headers }),
      );
      const { access_token: accessToken, refresh_token: refreshToken } =
        res.data;
      return { accessToken, refreshToken };
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  public async refreshToken(refresh: string): Promise<AuthResponse> {
    const data = qs.stringify({
      client_id: this.config.clientId,
      client_secret: this.config.clientSecret,
      grant_type: 'refresh_token',
      refresh_token: refresh,
      scope: 'data:read',
    });
    const headers = { 'content-type': 'application/x-www-form-urlencoded' };
    try {
      const res = await firstValueFrom(
        this.httpService.post(this.config.refreshUrl, data, { headers }),
      );
      const { access_token: accessToken, refresh_token: refreshToken } =
        res.data;
      if (!accessToken || !refreshToken)
        throw new InternalServerErrorException(
          'Could not refresh access token; Got no access/refresh token back',
        );
      return { accessToken, refreshToken };
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
