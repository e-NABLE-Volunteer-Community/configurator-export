export type DocumentId = string;
export type WorkspaceId = string;
export type ElementId = string;
export type PartId = string;
export type VersionId = string;

export type Document = {
  name: string;
  id: DocumentId;
  defaultWorkspace: Workspace;
};

export type Assembly = {
  type: 'Assembly';
  name: string;
  id: string;
  elementType: 'ASSEMBLY';
};

export enum OwnerType {
  user = 0,
}

export type Workspace = {
  name: string;
  id: WorkspaceId;
  projectId: string;
  owner: {
    type: OwnerType;
    name: string;
    id: string;
  };
};

export type Element = {
  id: ElementId;
};

export type PartName = string;
export type Part = {
  partId: PartId;
  elementId: ElementId;
  name: PartName;
};
export type Version = {
  id: VersionId;
  createdAt: Date;
  modifiedAt: Date;
  name: string;
  description: string;
};
