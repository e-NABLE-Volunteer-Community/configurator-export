import { registerEnumType } from '@nestjs/graphql';

export enum DeviceAuthorScalarFieldEnum {
    deviceId = "deviceId",
    authorId = "authorId"
}


registerEnumType(DeviceAuthorScalarFieldEnum, { name: 'DeviceAuthorScalarFieldEnum', description: undefined })
