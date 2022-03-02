import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceExtraUpdateManyMutationInput } from './device-extra-update-many-mutation.input';
import { DeviceExtraWhereInput } from './device-extra-where.input';

@ArgsType()
export class UpdateManyDeviceExtraArgs {

    @Field(() => DeviceExtraUpdateManyMutationInput, {nullable:false})
    data!: DeviceExtraUpdateManyMutationInput;

    @Field(() => DeviceExtraWhereInput, {nullable:true})
    where?: DeviceExtraWhereInput;
}
