import { BaseOnshapeApi } from './base-onshape-api.js';
import querystring from 'querystring';
import * as R from 'ramda';
import type {
  Document,
  DocumentId,
  ElementId,
  Part,
  WorkspaceId,
} from './onshape-types.js';

export class OnshapeApi extends BaseOnshapeApi {
  public async getDocument(documentId: DocumentId): Promise<Document> {
    const res = await this.sendRequest({
      method: 'get',
      resource: 'documents',
      noD: true,
      documentId,
    });

    return res.data;
  }

  public async getPartsForWorkspace(
    documentId: DocumentId,
    workspaceId: WorkspaceId,
  ): Promise<Part[] | { status: number }> {
    const res = await this.sendRequest({
      method: 'get',
      resource: 'parts',
      documentId,
      workspaceId,
    });
    return res.data;
  }

  public async encodeConfiguration(
    documentId: DocumentId,
    elementId: ElementId,
    parameters: Record<string, string>,
  ): Promise<string> {
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
      documentId,
      elementId,
      data,
    });
    // config is returned as a string to be concatenated with export URL,
    // but we pass our query params as record, so we need to remove the identifier
    return res.data.queryParam.replace('configuration=', '');
  }

  public async exportPartAsStl(
    documentId: DocumentId,
    workspaceId: WorkspaceId,
    elementId: ElementId,
  ): Promise<string> {
    const stlUrl = new URL(
      await this.getPartStlExportUrl(documentId, workspaceId, elementId),
    );
    return await this.exportPartAsStlAtUrl(stlUrl);
  }

  public async exportPartAsStlWithConfiguration(
    documentId: DocumentId,
    workspaceId: WorkspaceId,
    elementId: ElementId,
    encodedConfiguration: string,
  ): Promise<string> {
    const stlUrl = new URL(
      await this.getPartStlExportUrl(
        documentId,
        workspaceId,
        elementId,
        encodedConfiguration,
      ),
    );
    // stlUrl.searchParams.append('configuration', encodedConfiguration)
    return await this.exportPartAsStlAtUrl(stlUrl);
  }

  private async getPartStlExportUrl(
    documentId: DocumentId,
    workspaceId: WorkspaceId,
    elementId: ElementId,
    encodedConfiguration?: string,
  ): Promise<string> {
    const res = await this.sendRequest({
      method: 'get',
      resource: 'partstudios',
      subresource: 'stl',
      documentId,
      workspaceId,
      elementId,
      acceptJson: true,
      manualRedirect: true,
      query: encodedConfiguration
        ? { configuration: encodedConfiguration }
        : undefined,
    });
    return res.headers.location;
  }

  private async exportPartAsStlAtUrl(url: URL): Promise<string> {
    const path = url.pathname;
    const search = url.search;
    const query: Record<string, string> = Object.fromEntries(
      Object.entries(querystring.parse(search))
        .map(([k, v]) => [k, v?.toString()])
        .filter(([, v]) => !!v),
    );
    // query.mode = 'binary'
    query.units = 'millimeter';

    const res = await this.sendPrebuiltRequest({
      method: 'get',
      query,
      path,
      acceptJson: true,
    });
    return res.data;
  }

  // public async versionsForDocument(documentId: DocumentId): Promise<Version[]> {
  //   const res = await this.sendRequest({
  //     method: 'get',
  //     resource: 'documents',
  //     documentId,
  //     subresource: 'versions',
  //   });
  //
  //   return res.data.map((v: any) => ({
  //     id: v.id,
  //     name: v.name,
  //     createdAt: new Date(v.createdAt),
  //     modifiedAt: new Date(v.modifiedAt),
  //     description: v.description,
  //   }));
  // }

  // public async getAssembliesForWorkspace(
  //   documentId: DocumentId,
  //   workspaceId: WorkspaceId,
  // ): Promise<Assembly[]> {
  //   const res = await this.sendRequest({
  //     method: 'get',
  //     resource: 'documents',
  //     subresource: 'elements',
  //     documentId,
  //     workspaceId,
  //     query: {
  //       elementType: 'ASSEMBLY',
  //       withThumbnails: 'true',
  //     },
  //   });
  //   return res.data;
  // }

  // public async getMainAssemblyForWorkspace(
  //   documentId: DocumentId,
  //   workspaceId: WorkspaceId,
  // ): Promise<Assembly | undefined> {
  //   const assemblies = await this.getAssembliesForWorkspace(
  //     documentId,
  //     workspaceId,
  //   );
  //   return assemblies.find(R.propEq('name', 'Main Assembly'));
  // }

  // public async getDocuments(): Promise<JsonList<Document>> {
  //   const res = await this.sendRequest({
  //     method: 'get',
  //     resource: 'documents',
  //   });
  //
  //   return res.data;
  // }
  //
  // public async copyDefaultWorkspace(
  //   documentId: DocumentId,
  // ): Promise<Workspace> {
  //   const { defaultWorkspace } = await this.getDocument(documentId);
  //   const res = await this.sendRequest({
  //     method: 'post',
  //     resource: 'documents',
  //     noD: true,
  //     longWorkspaces: true,
  //     subresource: 'copy',
  //     documentId,
  //     workspaceId: defaultWorkspace.id,
  //     data: {
  //       isPublic: true,
  //       newName: 'Copy of Default Workspace',
  //     },
  //   });
  //   return res.data;
  // }
  //
  // public async getDefaultWorkspace(documentId: DocumentId): Promise<Workspace> {
  //   const { defaultWorkspace } = await this.getDocument(documentId);
  //   return defaultWorkspace;
  // }
}
