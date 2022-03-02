import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceUpdateInput } from './device-update.input';
import { DeviceWhereUniqueInput } from './device-where-unique.input';

@ArgsType()
export class UpdateOneDeviceArgs {

    @Field(() => DeviceUpdateInput, {nullable:false})
    data!: DeviceUpdateInput;

    @Field(() => DeviceWhereUniqueInput, {nullable:false})
    where!: DeviceWhereUniqueInput;
}
