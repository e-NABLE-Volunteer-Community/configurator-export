import { registerEnumType } from '@nestjs/graphql';

export enum ConfigurationDescriptionKind {
    NUMERIC = "NUMERIC",
    BOOLEAN = "BOOLEAN"
}


registerEnumType(ConfigurationDescriptionKind, { name: 'ConfigurationDescriptionKind', description: undefined })
