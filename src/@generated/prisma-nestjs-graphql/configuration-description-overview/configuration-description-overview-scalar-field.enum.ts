import { registerEnumType } from '@nestjs/graphql';

export enum ConfigurationDescriptionOverviewScalarFieldEnum {
    id = "id",
    configurationDescriptionId = "configurationDescriptionId",
    name = "name",
    description = "description",
    locale = "locale"
}


registerEnumType(ConfigurationDescriptionOverviewScalarFieldEnum, { name: 'ConfigurationDescriptionOverviewScalarFieldEnum', description: undefined })
