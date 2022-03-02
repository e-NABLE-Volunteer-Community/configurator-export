import { registerEnumType } from '@nestjs/graphql';

export enum DeviceScalarFieldEnum {
    id = "id",
    measurementSetDescriptionId = "measurementSetDescriptionId",
    optionSetDescriptionId = "optionSetDescriptionId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(DeviceScalarFieldEnum, { name: 'DeviceScalarFieldEnum', description: undefined })
