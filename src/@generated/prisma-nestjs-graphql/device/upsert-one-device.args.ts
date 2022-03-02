import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceWhereUniqueInput } from './device-where-unique.input';
import { DeviceCreateInput } from './device-create.input';
import { DeviceUpdateInput } from './device-update.input';

@ArgsType()
export class UpsertOneDeviceArgs {

    @Field(() => DeviceWhereUniqueInput, {nullable:false})
    where!: DeviceWhereUniqueInput;

    @Field(() => DeviceCreateInput, {nullable:false})
    create!: DeviceCreateInput;

    @Field(() => DeviceUpdateInput, {nullable:false})
    update!: DeviceUpdateInput;
}
