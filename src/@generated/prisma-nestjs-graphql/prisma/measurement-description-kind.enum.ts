import { registerEnumType } from '@nestjs/graphql';

export enum MeasurementDescriptionKind {
    NUMERIC = "NUMERIC",
    BOOLEAN = "BOOLEAN"
}


registerEnumType(MeasurementDescriptionKind, { name: 'MeasurementDescriptionKind', description: undefined })
