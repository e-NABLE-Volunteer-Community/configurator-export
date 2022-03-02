import { Controller, Get, Query } from '@nestjs/common';
import { ForgeAuthService } from './forge-auth.service';
import { AuthResponse } from '../oauth.service';

@Controller()
export class ForgeAuthController {
  constructor(private readonly authService: ForgeAuthService) {}

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
