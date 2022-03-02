import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementSetDescriptionCreateWithoutDevicesInput } from './measurement-set-description-create-without-devices.input';
import { MeasurementSetDescriptionCreateOrConnectWithoutDevicesInput } from './measurement-set-description-create-or-connect-without-devices.input';
import { MeasurementSetDescriptionWhereUniqueInput } from './measurement-set-description-where-unique.input';

@InputType()
export class MeasurementSetDescriptionCreateNestedOneWithoutDevicesInput {

    @Field(() => MeasurementSetDescriptionCreateWithoutDevicesInput, {nullable:true})
    create?: MeasurementSetDescriptionCreateWithoutDevicesInput;

    @Field(() => MeasurementSetDescriptionCreateOrConnectWithoutDevicesInput, {nullable:true})
    connectOrCreate?: MeasurementSetDescriptionCreateOrConnectWithoutDevicesInput;

    @Field(() => MeasurementSetDescriptionWhereUniqueInput, {nullable:true})
    connect?: MeasurementSetDescriptionWhereUniqueInput;
}
