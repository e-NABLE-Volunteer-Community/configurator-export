import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import {
  eNableAuthPayload,
  InvalidAuthPayloadHashError,
  TimedOutAuthPayloadError,
  UsersService,
} from './users.service';

describe('UserService', () => {
  let service: UsersService;

  let validAuthPayload: eNableAuthPayload;
  let invalidAuthPayload: eNableAuthPayload;
  let timedOutAuthPayload: eNableAuthPayload;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ isGlobal: true })],
      providers: [UsersService],
    }).compile();
    service = module.get<UsersService>(UsersService);

    const baseParams: Omit<eNableAuthPayload, 'hash'> = {
      uuid: 'b6f624da-98c3-4d5b-9385-10d00c7f793c',
      username: 'ndrwksr',
      fullname: 'Andrew Kaiser',
      email: 'ndrwksr@gmail.com',
      pic: 'https://hub.e-nable.org/uploads/profile_image/b6f624da-98c3-4d5b-9385-10d00c7f793c.jpg',
      admin: 1,
      time: Date.now() / 1000,
    };

    validAuthPayload = {
      ...baseParams,
      hash: service.hashUserParams(baseParams),
    };

    invalidAuthPayload = {
      ...baseParams,
      hash: 'asdf',
    };

    const timedOutBaseParams = {
      ...baseParams,
      time: Date.now() / 1000 - 30 * 60,
    };

    timedOutAuthPayload = {
      ...timedOutBaseParams,
      hash: service.hashUserParams(timedOutBaseParams),
    };
  });

  describe('authPayloadIsValid', () => {
    it('returns true for valid auth payload', () => {
      expect(service.userFromAuthPayload(validAuthPayload));
    });

    it('returns false for invalid hash', () => {
      expect(() => service.userFromAuthPayload(invalidAuthPayload)).toThrow(
        InvalidAuthPayloadHashError,
      );
    });

    it('returns false for time too far in the past', () => {
      expect(() => service.userFromAuthPayload(timedOutAuthPayload)).toThrow(
        TimedOutAuthPayloadError,
      );
    });
  });
});
