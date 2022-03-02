import { registerEnumType } from '@nestjs/graphql';

export enum DeviceImageScalarFieldEnum {
    id = "id",
    deviceId = "deviceId",
    image = "image",
    locale = "locale"
}


registerEnumType(DeviceImageScalarFieldEnum, { name: 'DeviceImageScalarFieldEnum', description: undefined })
