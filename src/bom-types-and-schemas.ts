import { JSONSchemaType } from 'ajv';
import {
  BomLocation,
  BomLocationType,
} from './export/exporter-factory-registry.js';
import { PartName } from './export/onshape/onshape-types.js';
import { AccessAndRefreshToken } from './export/onshape/base-onshape-api';

export type ExportId = string;
export interface BillOfMaterials<L extends BomLocationType = BomLocationType> {
  name: string;
  location: BomLocation<L>;
  authorization?: AccessAndRefreshToken;
  materials: Record<PartName, BomLine>;
}

export type BomLine = DefaultBomLine | ConfiguredBomLine;
export type DefaultBomLine = { count: number };
export const isDefaultBomLine = (line: BomLine): line is DefaultBomLine =>
  'count' in line;
export type ConfiguredBomLine = {
  instances: BomInstance[];
};
export const isConfiguredBomLine = (line: BomLine): line is ConfiguredBomLine =>
  'instances' in line;
export type BomInstance = {
  name: string;
  parameters: Record<string, string>;
};

export const BillOfMaterialsSchema: JSONSchemaType<BillOfMaterials> = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    // Intentionally incomplete. This is verified by concrete subclasses.
    location: { type: 'object', required: [] },
    authorization: {
      type: 'object',
      properties: {
        accessToken: { type: 'string' },
        refreshToken: { type: 'string' },
      },
      nullable: true,
      required: ['accessToken', 'refreshToken'],
    },
    materials: {
      type: 'object',
      required: [],
      additionalProperties: {
        oneOf: [
          {
            type: 'object',
            required: ['count'],
            properties: { count: { type: 'number' } },
            additionalProperties: false,
          },
          {
            type: 'object',
            properties: {
              instances: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    name: { type: 'string' },
                    parameters: {
                      type: 'object',
                      required: [],
                      additionalProperties: true,
                    },
                  },
                  additionalProperties: false,
                  required: ['name', 'parameters'],
                },
              },
            },
            required: ['instances'],
          },
        ],
      },
    },
  },
  required: ['name', 'location', 'materials'],
  additionalProperties: false,
};
