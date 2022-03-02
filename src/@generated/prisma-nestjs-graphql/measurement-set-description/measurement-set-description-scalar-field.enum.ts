import { registerEnumType } from '@nestjs/graphql';

export enum MeasurementSetDescriptionScalarFieldEnum {
    id = "id"
}


registerEnumType(MeasurementSetDescriptionScalarFieldEnum, { name: 'MeasurementSetDescriptionScalarFieldEnum', description: undefined })
