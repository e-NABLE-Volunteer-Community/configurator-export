import { registerEnumType } from '@nestjs/graphql';

export enum MeasurementDescriptionOverviewScalarFieldEnum {
    id = "id",
    measurementDescriptionId = "measurementDescriptionId",
    name = "name",
    description = "description",
    locale = "locale"
}


registerEnumType(MeasurementDescriptionOverviewScalarFieldEnum, { name: 'MeasurementDescriptionOverviewScalarFieldEnum', description: undefined })
