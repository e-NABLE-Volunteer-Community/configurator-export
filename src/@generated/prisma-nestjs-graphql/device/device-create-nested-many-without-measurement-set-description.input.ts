import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceCreateWithoutMeasurementSetDescriptionInput } from './device-create-without-measurement-set-description.input';
import { DeviceCreateOrConnectWithoutMeasurementSetDescriptionInput } from './device-create-or-connect-without-measurement-set-description.input';
import { DeviceCreateManyMeasurementSetDescriptionInputEnvelope } from './device-create-many-measurement-set-description-input-envelope.input';
import { DeviceWhereUniqueInput } from './device-where-unique.input';

@InputType()
export class DeviceCreateNestedManyWithoutMeasurementSetDescriptionInput {

    @Field(() => [DeviceCreateWithoutMeasurementSetDescriptionInput], {nullable:true})
    create?: Array<DeviceCreateWithoutMeasurementSetDescriptionInput>;

    @Field(() => [DeviceCreateOrConnectWithoutMeasurementSetDescriptionInput], {nullable:true})
    connectOrCreate?: Array<DeviceCreateOrConnectWithoutMeasurementSetDescriptionInput>;

    @Field(() => DeviceCreateManyMeasurementSetDescriptionInputEnvelope, {nullable:true})
    createMany?: DeviceCreateManyMeasurementSetDescriptionInputEnvelope;

    @Field(() => [DeviceWhereUniqueInput], {nullable:true})
    connect?: Array<DeviceWhereUniqueInput>;
}
