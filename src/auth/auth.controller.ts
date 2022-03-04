import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { eNableHubGuard } from './enable-hub.guard';
import { Public } from './admin.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @UseGuards(eNableHubGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user, req.onshapeAuth);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
