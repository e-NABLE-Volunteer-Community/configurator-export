import { registerEnumType } from '@nestjs/graphql';

export enum MeasurementDescriptionScalarFieldEnum {
    id = "id",
    measurementSetDescriptionId = "measurementSetDescriptionId",
    kind = "kind"
}


registerEnumType(MeasurementDescriptionScalarFieldEnum, { name: 'MeasurementDescriptionScalarFieldEnum', description: undefined })
