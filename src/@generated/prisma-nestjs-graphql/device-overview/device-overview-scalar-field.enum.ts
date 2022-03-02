import { registerEnumType } from '@nestjs/graphql';

export enum DeviceOverviewScalarFieldEnum {
    id = "id",
    deviceId = "deviceId",
    name = "name",
    description = "description",
    locale = "locale"
}


registerEnumType(DeviceOverviewScalarFieldEnum, { name: 'DeviceOverviewScalarFieldEnum', description: undefined })
