import { BaseOnshapeApi } from './base-onshape-api';
import querystring from 'querystring';
import * as R from 'ramda';
import type { DocumentId, ElementId, Part, WorkspaceId } from './onshape-types';
import { UnauthorizedException } from '@nestjs/common';
import { OnshapeDeviceNotFoundError } from './errors';
import { BillOfMaterials, ExportId } from '../../bom-types-and-schemas';

export class OnshapeExportApi extends BaseOnshapeApi {
  private readonly documentId: DocumentId;
  private readonly workspaceId: WorkspaceId;

  constructor(
    private readonly id: ExportId,
    private readonly bom: BillOfMaterials,
  ) {
    super(bom.authorization);
    this.documentId = bom.location.documentId;
    this.workspaceId = bom.location.workspaceId;
  }

  /**
   * Returns an array of all parts in the workspace specified in the BoM
   */
  public async getParts(): Promise<Part[]> {
    const res = await this.sendRequest({
      method: 'get',
      resource: 'parts',
      documentId: this.documentId,
      workspaceId: this.workspaceId,
    });
    const parts = res.data;
    // TODO: Proper errors
    if (res.status === 404) throw new OnshapeDeviceNotFoundError(this.bom);
    if (res.status === 401) throw new UnauthorizedException(parts);
    return parts;
  }

  /**
   * Returns an unconfigured STL for the specified part in the form of a Buffer
   */
  public async exportPart(elementId: ElementId): Promise<Buffer> {
    const stlUrl = new URL(await this.getPartStlExportUrl(elementId));
    return await this.exportPartAsStlAtUrl(stlUrl);
  }

  /**
   * Returns a configured STL for the specified part in the form of a Buffer
   */
  public async exportPartWithParameters(
    elementId: ElementId,
    parameters: Record<string, string>,
  ): Promise<Buffer> {
    const encodedConfiguration = await this.encodeConfiguration(
      elementId,
      parameters,
    );
    const stlUrl = new URL(
      await this.getPartStlExportUrl(elementId, encodedConfiguration),
    );
    return await this.exportPartAsStlAtUrl(stlUrl);
  }

  /**
   * Returns the provided parameters as an encoded configuration. This encoded
   * configuration should be the value of a query parameter on the export
   * request.
   * @private
   */
  private async encodeConfiguration(
    elementId: ElementId,
    parameters: Record<string, string>,
  ): Promise<string> {
    // Convert a record of shape:
    //    {[name]: [value], ...}
    // ...into the format that Onshape expects:
    //    {parameters: [{parameterId: [name], parameterValue: [value]}...]}
    const data = R.objOf(
      'parameters',
      R.toPairs(parameters).map(([k, v]) => ({
        parameterId: k,
        parameterValue: v,
      })),
    );

    const res = await this.sendRequest({
      method: 'post',
      resource: 'elements',
      subresource: 'configurationencodings',
      documentId: this.documentId,
      elementId,
      data,
    });

    // Onshape returns the encoded configuration as a string which is expected
    // to be concatenated onto a URL, so the string starts with `configuration=`
    //
    // Because we pass query parameters to sendRequest as a record, we need to
    // strip off the query param key from the returned string, and specify the
    // name of the query param by making it the key for this param in the query
    // parameter of sendRequest
    return res.data.queryParam.replace('configuration=', '');
  }

  /**
   * Returns the URL which will return the STL for the specified element when
   * hit with a GET request.
   * @private
   */
  private async getPartStlExportUrl(
    elementId: ElementId,
    encodedConfiguration?: string,
  ): Promise<string> {
    const res = await this.sendRequest({
      method: 'get',
      resource: 'partstudios',
      subresource: 'stl',
      documentId: this.documentId,
      workspaceId: this.workspaceId,
      elementId,
      acceptJson: true,
      manualRedirect: true,
      query: encodedConfiguration
        ? { configuration: encodedConfiguration }
        : undefined,
    });
    return res.headers.location;
  }

  /**
   * Hits the provided URL to export a part as an STL, and returns the response
   * as a buffer.
   * @private
   */
  private async exportPartAsStlAtUrl(url: URL): Promise<Buffer> {
    const path = url.pathname;
    const search = url.search;

    // Convert query parameters into an object
    const query: Record<string, string> = Object.fromEntries(
      Object.entries(querystring.parse(search))
        .map(([k, v]) => [k, v?.toString()])
        .filter(([, v]) => !!v),
    );

    // query.mode = 'binary' // For some reason, this comes back corrupted
    query.units = 'millimeter';

    const res = await this.sendPrebuiltRequest({
      method: 'get',
      query,
      path,
      asBuffer: true,
    });
    return res.data;
  }
}
