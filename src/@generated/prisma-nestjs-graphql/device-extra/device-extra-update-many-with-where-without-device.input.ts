import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceExtraScalarWhereInput } from './device-extra-scalar-where.input';
import { DeviceExtraUpdateManyMutationInput } from './device-extra-update-many-mutation.input';

@InputType()
export class DeviceExtraUpdateManyWithWhereWithoutDeviceInput {

    @Field(() => DeviceExtraScalarWhereInput, {nullable:false})
    where!: DeviceExtraScalarWhereInput;

    @Field(() => DeviceExtraUpdateManyMutationInput, {nullable:false})
    data!: DeviceExtraUpdateManyMutationInput;
}
