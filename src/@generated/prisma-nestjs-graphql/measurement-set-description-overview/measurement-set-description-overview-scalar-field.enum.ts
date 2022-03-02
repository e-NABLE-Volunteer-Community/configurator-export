import { registerEnumType } from '@nestjs/graphql';

export enum MeasurementSetDescriptionOverviewScalarFieldEnum {
    id = "id",
    measurementSetDescriptionId = "measurementSetDescriptionId",
    name = "name",
    description = "description",
    locale = "locale"
}


registerEnumType(MeasurementSetDescriptionOverviewScalarFieldEnum, { name: 'MeasurementSetDescriptionOverviewScalarFieldEnum', description: undefined })
