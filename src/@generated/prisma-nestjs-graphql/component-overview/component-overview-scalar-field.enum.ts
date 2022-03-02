import { registerEnumType } from '@nestjs/graphql';

export enum ComponentOverviewScalarFieldEnum {
    id = "id",
    componentId = "componentId",
    name = "name",
    description = "description",
    locale = "locale"
}


registerEnumType(ComponentOverviewScalarFieldEnum, { name: 'ComponentOverviewScalarFieldEnum', description: undefined })
