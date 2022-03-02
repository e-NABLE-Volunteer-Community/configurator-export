import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceWhereUniqueInput } from './device-where-unique.input';
import { DeviceCreateWithoutMeasurementSetDescriptionInput } from './device-create-without-measurement-set-description.input';

@InputType()
export class DeviceCreateOrConnectWithoutMeasurementSetDescriptionInput {

    @Field(() => DeviceWhereUniqueInput, {nullable:false})
    where!: DeviceWhereUniqueInput;

    @Field(() => DeviceCreateWithoutMeasurementSetDescriptionInput, {nullable:false})
    create!: DeviceCreateWithoutMeasurementSetDescriptionInput;
}
