import { Test, TestingModule } from '@nestjs/testing';
import { DevicesResolver } from './devices.resolver';
import { DevicesService } from './devices.service';
import { PrismaModule } from '../prisma.module';

describe('DevicesResolver', () => {
  let resolver: DevicesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [DevicesResolver, DevicesService],
    }).compile();

    resolver = module.get<DevicesResolver>(DevicesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
