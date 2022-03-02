import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceUpdateManyMutationInput } from './device-update-many-mutation.input';
import { DeviceWhereInput } from './device-where.input';

@ArgsType()
export class UpdateManyDeviceArgs {

    @Field(() => DeviceUpdateManyMutationInput, {nullable:false})
    data!: DeviceUpdateManyMutationInput;

    @Field(() => DeviceWhereInput, {nullable:true})
    where?: DeviceWhereInput;
}
