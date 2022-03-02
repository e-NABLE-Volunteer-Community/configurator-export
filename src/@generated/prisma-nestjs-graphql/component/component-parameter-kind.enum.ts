import { registerEnumType } from '@nestjs/graphql';

export enum ComponentParameterKind {
    NUMERIC = "NUMERIC",
    BOOLEAN = "BOOLEAN"
}


registerEnumType(ComponentParameterKind, { name: 'ComponentParameterKind', description: undefined })
