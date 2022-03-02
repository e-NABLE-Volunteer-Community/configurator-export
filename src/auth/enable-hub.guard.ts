import { AuthGuard } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class eNableHubGuard extends AuthGuard('enable-hub') {}
