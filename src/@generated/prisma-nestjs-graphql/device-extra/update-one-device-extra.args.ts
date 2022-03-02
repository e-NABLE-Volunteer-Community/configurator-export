import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceExtraUpdateInput } from './device-extra-update.input';
import { DeviceExtraWhereUniqueInput } from './device-extra-where-unique.input';

@ArgsType()
export class UpdateOneDeviceExtraArgs {

    @Field(() => DeviceExtraUpdateInput, {nullable:false})
    data!: DeviceExtraUpdateInput;

    @Field(() => DeviceExtraWhereUniqueInput, {nullable:false})
    where!: DeviceExtraWhereUniqueInput;
}
