import { registerEnumType } from '@nestjs/graphql';

export enum ConfigurationDescriptionScalarFieldEnum {
    id = "id",
    configurationSetDescriptionId = "configurationSetDescriptionId",
    kind = "kind"
}


registerEnumType(ConfigurationDescriptionScalarFieldEnum, { name: 'ConfigurationDescriptionScalarFieldEnum', description: undefined })
