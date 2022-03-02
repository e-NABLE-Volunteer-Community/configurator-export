import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceOverviewScalarWhereInput } from './device-overview-scalar-where.input';
import { DeviceOverviewUpdateManyMutationInput } from './device-overview-update-many-mutation.input';

@InputType()
export class DeviceOverviewUpdateManyWithWhereWithoutDeviceInput {

    @Field(() => DeviceOverviewScalarWhereInput, {nullable:false})
    where!: DeviceOverviewScalarWhereInput;

    @Field(() => DeviceOverviewUpdateManyMutationInput, {nullable:false})
    data!: DeviceOverviewUpdateManyMutationInput;
}
