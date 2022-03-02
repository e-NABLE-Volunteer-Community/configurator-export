import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementSetDescriptionWhereUniqueInput } from './measurement-set-description-where-unique.input';
import { MeasurementSetDescriptionCreateWithoutDevicesInput } from './measurement-set-description-create-without-devices.input';

@InputType()
export class MeasurementSetDescriptionCreateOrConnectWithoutDevicesInput {

    @Field(() => MeasurementSetDescriptionWhereUniqueInput, {nullable:false})
    where!: MeasurementSetDescriptionWhereUniqueInput;

    @Field(() => MeasurementSetDescriptionCreateWithoutDevicesInput, {nullable:false})
    create!: MeasurementSetDescriptionCreateWithoutDevicesInput;
}
