import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceExtraWhereUniqueInput } from './device-extra-where-unique.input';
import { DeviceExtraCreateInput } from './device-extra-create.input';
import { DeviceExtraUpdateInput } from './device-extra-update.input';

@ArgsType()
export class UpsertOneDeviceExtraArgs {

    @Field(() => DeviceExtraWhereUniqueInput, {nullable:false})
    where!: DeviceExtraWhereUniqueInput;

    @Field(() => DeviceExtraCreateInput, {nullable:false})
    create!: DeviceExtraCreateInput;

    @Field(() => DeviceExtraUpdateInput, {nullable:false})
    update!: DeviceExtraUpdateInput;
}
