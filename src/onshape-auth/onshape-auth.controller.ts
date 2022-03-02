import { Controller, Get, Query } from '@nestjs/common';
import { AuthResponse } from '../oauth.service';
import { OnshapeAuthService } from './onshape-auth.service';

@Controller('onshape')
export class OnshapeAuthController {
  constructor(private readonly authService: OnshapeAuthService) {}

  @Get('get-token')
  async getToken(@Query('code') code): Promise<AuthResponse> {
    if (typeof code !== 'string') throw new Error('Missing code!');
    return await this.authService.getToken(code);
  }

  @Get('refresh-token')
  async refreshToken(@Query('refresh') refresh): Promise<AuthResponse> {
    if (typeof refresh !== 'string') throw new Error('Bad refresh token');
    return await this.authService.refreshToken(refresh);
  }
}
