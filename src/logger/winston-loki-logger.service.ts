import { Injectable, LoggerService } from '@nestjs/common';
import winston, { createLogger, transports } from 'winston';
import LokiTransport from 'winston-loki';
import { ConfigService } from '@nestjs/config';
import { InternalServerError } from '../errors';

@Injectable()
export class WinstonLokiLoggerService implements LoggerService {
  private readonly logger: winston.Logger;

  constructor(private readonly configService: ConfigService) {
    const options: winston.LoggerOptions = {
      transports: [new transports.Console()],
    };

    if (configService.get<string>('NODE_ENV') !== 'test') {
      const lokiUrl = configService.get<string>('LOKI_URL');
      const lokiId = configService.get<string>('LOKI_ID');
      const lokiKey = configService.get<string>('LOKI_KEY');

      const errMsgFor = (env: string) =>
        `Failed to start; Missing ${env} env var`;
      if (!lokiUrl) throw new InternalServerError(errMsgFor('LOKI_URL'));
      if (!lokiId) throw new InternalServerError(errMsgFor('LOKI_ID'));
      if (!lokiKey) throw new InternalServerError(errMsgFor('LOKI_KEY'));

      (options.transports as winston.transport[]).push(
        new LokiTransport({
          host: lokiUrl,
          basicAuth: `${lokiId}:${lokiKey}`,
        }),
      );
    }

    this.logger = createLogger(options);
  }

  /**
   * Write a 'log' level log.
   */
  log(message: any, labels?: Record<string, unknown>) {
    this.logger.info(this.logLineForArgs(message, labels));
  }

  /**
   * Write an 'error' level log.
   */
  error(message: any, labels?: Record<string, unknown>) {
    this.logger.error(this.logLineForArgs(message, labels));
  }

  /**
   * Write a 'warn' level log.
   */
  warn(message: any, labels?: Record<string, unknown>) {
    this.logger.warn(this.logLineForArgs(message, labels));
  }

  /**
   * Write a 'debug' level log.
   */
  debug?(message: any, labels?: Record<string, unknown>) {
    this.logger.debug(this.logLineForArgs(message, labels));
  }

  /**
   * Write a 'verbose' level log.
   */
  verbose?(message: any, labels?: Record<string, unknown>) {
    this.logger.verbose(this.logLineForArgs(message, labels));
  }

  private logLineForArgs(message: any, labels: Record<string, unknown> = {}) {
    return { message, labels: this.addDefaultLabels(labels) };
  }

  private addDefaultLabels(
    labels: Record<string, unknown>,
  ): Record<string, unknown> {
    const errMsgFor = (env: string) =>
      `Failed to create log message; Missing ${env} env var`;
    const env = this.configService.get<string>('NODE_ENV');
    if (!env) throw new InternalServerError(errMsgFor('NODE_ENV'));
    labels.env = process.env.NODE_ENV;
    return labels;
  }
}
