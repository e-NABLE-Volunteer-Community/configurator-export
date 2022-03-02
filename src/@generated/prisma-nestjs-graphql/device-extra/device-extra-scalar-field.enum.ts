import { registerEnumType } from '@nestjs/graphql';

export enum DeviceExtraScalarFieldEnum {
    id = "id",
    deviceId = "deviceId",
    name = "name",
    description = "description",
    location = "location",
    exportLocation = "exportLocation",
    locale = "locale"
}


registerEnumType(DeviceExtraScalarFieldEnum, { name: 'DeviceExtraScalarFieldEnum', description: undefined })
