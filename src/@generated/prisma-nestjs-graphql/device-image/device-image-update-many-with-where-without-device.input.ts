import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceImageScalarWhereInput } from './device-image-scalar-where.input';
import { DeviceImageUpdateManyMutationInput } from './device-image-update-many-mutation.input';

@InputType()
export class DeviceImageUpdateManyWithWhereWithoutDeviceInput {

    @Field(() => DeviceImageScalarWhereInput, {nullable:false})
    where!: DeviceImageScalarWhereInput;

    @Field(() => DeviceImageUpdateManyMutationInput, {nullable:false})
    data!: DeviceImageUpdateManyMutationInput;
}
