import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-custom';
import { AuthService, eNableGuestOrUserAuthPayload } from './auth.service';
import { Request } from 'express';

@Injectable()
export class eNableHubStrategy extends PassportStrategy(
  Strategy,
  'enable-hub',
) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(req: Request<eNableGuestOrUserAuthPayload>): Promise<any> {
    const payload = req.body;
    payload.admin = parseInt(payload.admin);
    payload.time = parseInt(payload.time);
    const user = await this.authService.validateAuthPayload(payload);
    if (!user) throw new UnauthorizedException();
    return user;
  }
}
