import { registerEnumType } from '@nestjs/graphql';

export enum ComponentScalarFieldEnum {
    id = "id",
    deviceId = "deviceId",
    count = "count",
    location = "location",
    exportLocation = "exportLocation"
}


registerEnumType(ComponentScalarFieldEnum, { name: 'ComponentScalarFieldEnum', description: undefined })
