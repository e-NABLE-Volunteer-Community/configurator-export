import { registerEnumType } from '@nestjs/graphql';

export enum ConfigurationSetDescriptionOverviewScalarFieldEnum {
    id = "id",
    configurationSetDescriptionId = "configurationSetDescriptionId",
    name = "name",
    description = "description",
    locale = "locale"
}


registerEnumType(ConfigurationSetDescriptionOverviewScalarFieldEnum, { name: 'ConfigurationSetDescriptionOverviewScalarFieldEnum', description: undefined })
