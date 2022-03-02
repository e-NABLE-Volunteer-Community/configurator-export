import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementSetDescriptionCreateWithoutDevicesInput } from './measurement-set-description-create-without-devices.input';
import { MeasurementSetDescriptionCreateOrConnectWithoutDevicesInput } from './measurement-set-description-create-or-connect-without-devices.input';
import { MeasurementSetDescriptionUpsertWithoutDevicesInput } from './measurement-set-description-upsert-without-devices.input';
import { MeasurementSetDescriptionWhereUniqueInput } from './measurement-set-description-where-unique.input';
import { MeasurementSetDescriptionUpdateWithoutDevicesInput } from './measurement-set-description-update-without-devices.input';

@InputType()
export class MeasurementSetDescriptionUpdateOneRequiredWithoutDevicesInput {

    @Field(() => MeasurementSetDescriptionCreateWithoutDevicesInput, {nullable:true})
    create?: MeasurementSetDescriptionCreateWithoutDevicesInput;

    @Field(() => MeasurementSetDescriptionCreateOrConnectWithoutDevicesInput, {nullable:true})
    connectOrCreate?: MeasurementSetDescriptionCreateOrConnectWithoutDevicesInput;

    @Field(() => MeasurementSetDescriptionUpsertWithoutDevicesInput, {nullable:true})
    upsert?: MeasurementSetDescriptionUpsertWithoutDevicesInput;

    @Field(() => MeasurementSetDescriptionWhereUniqueInput, {nullable:true})
    connect?: MeasurementSetDescriptionWhereUniqueInput;

    @Field(() => MeasurementSetDescriptionUpdateWithoutDevicesInput, {nullable:true})
    update?: MeasurementSetDescriptionUpdateWithoutDevicesInput;
}
