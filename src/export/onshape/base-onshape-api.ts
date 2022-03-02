import querystring from 'querystring';
import { createHmac } from 'crypto';
import axios, { Method } from 'axios';
import { InternalServerError } from '../../errors';
import { ConfigService } from '@nestjs/config';

const chars = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
];

const sampleArray = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

export type AccessAndRefreshToken = {
  accessToken: string;
  refreshToken: string;
};

export type PublicAndPrivateKeys = {
  privateKey: string;
  publicKey: string;
};

const isAccessAndRefreshToken = (unk: unknown): unk is AccessAndRefreshToken =>
  typeof unk === 'object' &&
  unk !== null &&
  'accessToken' in unk &&
  'refreshToken' in unk;

export abstract class BaseOnshapeApi {
  private readonly baseUrl: string = 'https://cad.onshape.com';
  private readonly axios = axios;

  private readonly publicKey: string;
  private readonly privateKey: string;

  constructor(
    private readonly configService: ConfigService,
    private readonly auth?: AccessAndRefreshToken,
  ) {
    const publicKey = configService.get<string>('ONSHAPE_PUBLIC_API_KEY');
    if (!publicKey) throw new InternalServerError('Could not get publicKey');
    const privateKey = configService.get<string>('ONSHAPE_PRIVATE_API_KEY');
    if (!privateKey) throw new InternalServerError('Could not get privateKey');

    this.publicKey = publicKey;
    this.privateKey = privateKey;
  }

  private buildQueryString(query?: Record<string, string>) {
    if (typeof query == 'undefined') {
      return '';
    }
    if (typeof query != 'object') {
      throw new Error('Invalid Query');
    }

    // remove undefined properties
    Object.keys(query).forEach(
      (key) => query[key] === undefined && delete query[key],
    );
    return querystring.stringify(query);
  }

  private buildHeaders(
    auth: AccessAndRefreshToken | PublicAndPrivateKeys,
    args: {
      extraHeaders?: Record<string, string>;
      acceptJson?: true;
      method: string;
      nonce: string;
      date: Date;
      path: string;
      query?: Record<string, string>;
    },
  ) {
    const {
      extraHeaders = {},
      method,
      nonce,
      acceptJson,
      date,
      path,
      query,
    } = args;
    const headers: Record<string, string> = {
      Accept: acceptJson
        ? 'application/json'
        : 'application/vnd.onshape.v1+json',
      'Content-Type': 'application/json',
      ...extraHeaders,
      Date: date.toUTCString(),
      'On-Nonce': nonce,
    };

    if (isAccessAndRefreshToken(auth)) {
      headers['Authorization'] = `Bearer ${auth.accessToken}`;
      console.log(headers);
      return headers;
    }

    const hmacString = [
      // This format defined by Onshape auth
      method,
      headers['On-Nonce'],
      headers['Date'],
      headers['Content-Type'],
      path,
      this.buildQueryString(query),
      null, // we want to join a trailing newline
    ]
      .join('\n')
      .toLowerCase();
    const signature = createHmac('sha256', auth.privateKey)
      .update(hmacString)
      .digest('base64');
    headers['Authorization'] = `On ${auth.publicKey}:HmacSHA256:${signature}`;

    return headers;
  }

  private createNonce() {
    const range = [...Array(25).keys()]; // like Python's 'range(25)'
    return range.map(() => sampleArray(chars)).join('');
  }

  private static buildDWMVEPath(args: {
    resource: string;
    documentId?: string;
    workspaceId?: string;
    versionId?: string;
    microversionId?: string;
    longWorkspaces?: true;
    elementId?: string;
    partId?: string;
    subresource?: string;
    noD?: true;
  }) {
    const {
      resource,
      documentId,
      workspaceId,
      versionId,
      microversionId,
      longWorkspaces,
      elementId,
      partId,
      subresource,
      noD,
    } = args;
    // Build a path for the Onshape REST API.
    //
    // It's not valid to pass more than one of workspaceId, versionId,
    // or microversionId.
    //
    // Examples of valid path patterns:
    //  - /api/[resource]/d/[documentId]/w/[workspaceId]/e/[elementId]/[subresource]
    //  - /api/[resource]/d/[documentId]/w/[workspaceId]/e/[elementId]
    //  - /api/[resource]/d/[documentId]/w/[workspaceId]
    //  - /api/[resource]/d/[documentId]/v/[versionId][...]
    //  - /api/[resource]/d/[documentId]/m/[microversionId][...]
    let path = [null, 'api', resource];

    if (documentId) {
      if (!noD) path.push('d');
      path.push(documentId);
      // exactly one of these is valid
      if (workspaceId) {
        path.push(longWorkspaces ? 'workspaces' : 'w', workspaceId);
      } else if (versionId) {
        path.push('v', versionId);
      } else if (microversionId) {
        path.push('m', microversionId);
      }

      if (elementId) {
        path.push('e', elementId);
      }

      if (partId) {
        path.push('partid', partId);
      }

      if (subresource) {
        path.push(subresource);
      }
    }

    return path.join('/');
  }

  protected sendRequest(args: {
    method: Method;
    query?: Record<string, string>;

    resource: string;
    subresource?: string;

    documentId?: string;
    workspaceId?: string;
    elementId?: string;
    partId?: string;
    versionId?: string;
    microversionId?: string;

    extraHeaders?: Record<string, string>;
    data?: unknown;

    noD?: true;
    acceptJson?: true;
    longWorkspaces?: true;
    manualRedirect?: true;

    auth?: AccessAndRefreshToken;
  }) {
    const {
      method,
      query,
      resource,
      subresource,
      documentId,
      workspaceId,
      elementId,
      partId,
      versionId,
      microversionId,
      extraHeaders,
      data,
      noD,
      acceptJson,
      longWorkspaces,
      manualRedirect,
    } = args;
    const path = BaseOnshapeApi.buildDWMVEPath({
      resource,
      documentId,
      partId,
      workspaceId,
      versionId,
      noD,
      microversionId,
      longWorkspaces,
      elementId,
      subresource,
    });

    return this.axios.request({
      url: this.baseUrl + path,
      method,
      headers: this.buildHeaders(
        this.auth ?? { publicKey: this.publicKey, privateKey: this.privateKey },
        {
          acceptJson,
          extraHeaders,
          method,
          nonce: this.createNonce(),
          date: new Date(),
          path,
          query,
        },
      ),
      data,
      maxRedirects: manualRedirect ? 0 : undefined,
      validateStatus: manualRedirect ? (status) => status === 307 : null,
      // we need the query string to match the Authorization header exactly
      params: query,
      paramsSerializer: this.buildQueryString,
    });
  }

  protected sendPrebuiltRequest(args: {
    method: Method;
    query?: Record<string, string>;
    path: string;
    extraHeaders?: Record<string, string>;
    data?: unknown;
    acceptJson?: true;
    manualRedirect?: true;
    asBuffer?: true;
  }) {
    const {
      method,
      query,
      path,
      extraHeaders,
      data,
      acceptJson,
      manualRedirect,
      asBuffer,
    } = args;
    return this.axios.request({
      url: this.baseUrl + path,
      method,
      headers: this.buildHeaders(
        this.auth ?? { publicKey: this.publicKey, privateKey: this.privateKey },
        {
          acceptJson,
          extraHeaders,
          method,
          nonce: this.createNonce(),
          date: new Date(),
          path,
          query,
        },
      ),
      data,
      responseType: asBuffer ? 'arraybuffer' : undefined,
      maxRedirects: manualRedirect ? 0 : undefined,
      validateStatus: manualRedirect ? (status) => status === 307 : null,
      // we need the query string to match the Authorization header exactly
      params: query,
      paramsSerializer: this.buildQueryString,
    });
  }
}
