import { registerEnumType } from '@nestjs/graphql';

export enum ComponentParameterScalarFieldEnum {
    id = "id",
    componentId = "componentId",
    kind = "kind",
    cadName = "cadName",
    humanName = "humanName",
    description = "description"
}


registerEnumType(ComponentParameterScalarFieldEnum, { name: 'ComponentParameterScalarFieldEnum', description: undefined })
