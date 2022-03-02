import { Test } from '@nestjs/testing';
import { authImports, authProviders } from '../src/auth-providers';
import { createMock } from '@golevelup/ts-jest';
import { User } from '../src/users/users.service';
import { AuthService } from '../src/auth/auth.service';

const user: User = {
  id: '1234',
  fullName: 'Test User',
  email: 'user@test.org',
  username: 'testuser',
  profileImageUrl: 'https://google.com/',
  isAdmin: false,
};
const admin: User = {
  id: '1234',
  fullName: 'Test Admin',
  email: 'admin@test.org',
  username: 'testadmin',
  profileImageUrl: 'https://google.com/',
  isAdmin: true,
};

export type Requester = 'unauthenticated' | 'user' | 'admin';
export const getAuthHeaders = async (
  requester: Requester,
): Promise<{} | { Authorization: string }> => {
  const module = await Test.createTestingModule({
    imports: [...authImports],
    providers: [...authProviders],
  })
    .useMocker(createMock)
    .compile();

  if (requester === 'unauthenticated') return {};

  const authService = module.get<AuthService>(AuthService);
  const requesterObj = requester === 'user' ? user : admin;
  const { access_token } = await authService.login(requesterObj);
  return { Authorization: `Bearer ${access_token}` };
};
