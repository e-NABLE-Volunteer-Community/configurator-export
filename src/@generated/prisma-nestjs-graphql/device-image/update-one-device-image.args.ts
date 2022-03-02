import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceImageUpdateInput } from './device-image-update.input';
import { DeviceImageWhereUniqueInput } from './device-image-where-unique.input';

@ArgsType()
export class UpdateOneDeviceImageArgs {

    @Field(() => DeviceImageUpdateInput, {nullable:false})
    data!: DeviceImageUpdateInput;

    @Field(() => DeviceImageWhereUniqueInput, {nullable:false})
    where!: DeviceImageWhereUniqueInput;
}
