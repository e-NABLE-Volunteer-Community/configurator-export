import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import './export';
import fs from 'fs';
import { ConfigService } from '@nestjs/config';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function bootstrap() {
  const https = {
    key: fs.readFileSync('./secrets/enable-exporter.key.pem'),
    cert: fs.readFileSync('./secrets/enable-exporter.crt.pem'),
  };
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      https,
    }),
  );
  app.enableCors();
  const configService: ConfigService = app.get<ConfigService>(ConfigService);
  const port = configService.get('EXPORTER_PORT');
  await app.listen(port).then(() => console.info(`Listening on port ${port}`));
}
bootstrap();
