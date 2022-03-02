import { registerEnumType } from '@nestjs/graphql';

export enum ConfigurationSetDescriptionScalarFieldEnum {
    id = "id"
}


registerEnumType(ConfigurationSetDescriptionScalarFieldEnum, { name: 'ConfigurationSetDescriptionScalarFieldEnum', description: undefined })
