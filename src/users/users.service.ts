import * as crypto from 'crypto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { append, join, pipe, values } from 'ramda';

// PROPERTY ORDER MATTERS!!
export type eNableAuthPayload = {
  uuid: string;
  username: string;
  fullname: string;
  email: string;
  pic: string;
  admin: 0 | 1;
  time: number;
  hash: string;
};

export type User = {
  id: string;
  username: string;
  fullName: string;
  email: string;
  profileImageUrl: string;
  isAdmin: boolean;
};

export const adminsFileEnvVar: string = 'ADMINS_FILE' as const;

export class InvalidAuthPayloadHashError extends UnauthorizedException {
  constructor() {
    super('Auth payload hash was invalid');
  }
}

export class TimedOutAuthPayloadError extends UnauthorizedException {
  constructor() {
    super('Auth payload has timed out');
  }
}

@Injectable()
export class UsersService {
  private readonly salt: string;

  constructor(configService: ConfigService) {
    const salt = configService.get<string>('ENABLE_SALT');
    if (!salt) throw new Error('Could not get ENABLE_SALT');
    this.salt = salt;
  }

  public hashUserParams(userParams: Omit<eNableAuthPayload, 'hash'>): string {
    const sha256 = (str: string): string =>
      crypto.createHash('sha256').update(str).digest().toString('hex');
    const hashUserParams = pipe(values, append(this.salt), join(''), sha256);
    return hashUserParams(userParams);
  }

  public verifyAuthPayload({ hash, ...userParams }: eNableAuthPayload): void {
    const timedOut = userParams.time < Date.now() / 1000 - 30;
    if (timedOut) throw new TimedOutAuthPayloadError();
    const actualHash = this.hashUserParams(userParams);
    const hashIsInvalid = hash !== actualHash;
    if (hashIsInvalid) throw new InvalidAuthPayloadHashError();
  }

  public userFromAuthPayload(payload: eNableAuthPayload): User {
    this.verifyAuthPayload(payload);
    return {
      id: payload.uuid,
      username: payload.username,
      fullName: payload.fullname,
      email: payload.email,
      profileImageUrl: payload.pic,
      isAdmin: payload.admin === 1,
    };
  }
}
