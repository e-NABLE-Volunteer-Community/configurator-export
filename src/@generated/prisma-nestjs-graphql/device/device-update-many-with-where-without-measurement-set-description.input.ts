import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceScalarWhereInput } from './device-scalar-where.input';
import { DeviceUpdateManyMutationInput } from './device-update-many-mutation.input';

@InputType()
export class DeviceUpdateManyWithWhereWithoutMeasurementSetDescriptionInput {

    @Field(() => DeviceScalarWhereInput, {nullable:false})
    where!: DeviceScalarWhereInput;

    @Field(() => DeviceUpdateManyMutationInput, {nullable:false})
    data!: DeviceUpdateManyMutationInput;
}
