import { registerEnumType } from '@nestjs/graphql';

export enum ComponentParameterConfigurationDescriptionPairingScalarFieldEnum {
    id = "id",
    componentParameterId = "componentParameterId",
    configurationDescriptionId = "configurationDescriptionId"
}


registerEnumType(ComponentParameterConfigurationDescriptionPairingScalarFieldEnum, { name: 'ComponentParameterConfigurationDescriptionPairingScalarFieldEnum', description: undefined })
