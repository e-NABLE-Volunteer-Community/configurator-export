import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WsResponse,
} from '@nestjs/websockets';
import { Observable } from 'rxjs';
import { ExportId } from '../../bom-types-and-schemas';
import { ExportStatusService } from './export-status.service';
import { ExportStatus } from './export-status-types';
import { pipe, map } from 'rxjs';

@WebSocketGateway(3008, { cors: true, namespace: 'export-status' })
export class ExportStatusGateway {
  constructor(private readonly exportStatusService: ExportStatusService) {}

  @SubscribeMessage('status')
  onEvent(
    @MessageBody() exportId: ExportId,
  ): Observable<WsResponse<ExportStatus>> {
    return pipe(
      map((status: ExportStatus) => ({
        event: 'update',
        data: status,
      })),
    )(this.exportStatusService.watchExportStatus(exportId));
  }
}
