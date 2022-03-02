import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceImageUpdateManyMutationInput } from './device-image-update-many-mutation.input';
import { DeviceImageWhereInput } from './device-image-where.input';

@ArgsType()
export class UpdateManyDeviceImageArgs {

    @Field(() => DeviceImageUpdateManyMutationInput, {nullable:false})
    data!: DeviceImageUpdateManyMutationInput;

    @Field(() => DeviceImageWhereInput, {nullable:true})
    where?: DeviceImageWhereInput;
}
