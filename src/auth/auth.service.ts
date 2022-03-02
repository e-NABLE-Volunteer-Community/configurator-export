import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { eNableAuthPayload, User, UsersService } from '../users/users.service';

export type eNableGuestOrUserAuthPayload = eNableAuthPayload | { guest: 1 };

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateAuthPayload(
    payload: eNableGuestOrUserAuthPayload,
  ): Promise<User | null> {
    if ('guest' in payload) return null;
    return this.usersService.userFromAuthPayload(payload);
  }

  async login(user: User) {
    const payload = { user, sub: user.id };
    return { access_token: this.jwtService.sign(payload) };
  }
}
