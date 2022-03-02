import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceCreateWithoutOptionSetDescriptionInput } from './device-create-without-option-set-description.input';
import { DeviceCreateOrConnectWithoutOptionSetDescriptionInput } from './device-create-or-connect-without-option-set-description.input';
import { DeviceCreateManyOptionSetDescriptionInputEnvelope } from './device-create-many-option-set-description-input-envelope.input';
import { DeviceWhereUniqueInput } from './device-where-unique.input';

@InputType()
export class DeviceUncheckedCreateNestedManyWithoutOptionSetDescriptionInput {

    @Field(() => [DeviceCreateWithoutOptionSetDescriptionInput], {nullable:true})
    create?: Array<DeviceCreateWithoutOptionSetDescriptionInput>;

    @Field(() => [DeviceCreateOrConnectWithoutOptionSetDescriptionInput], {nullable:true})
    connectOrCreate?: Array<DeviceCreateOrConnectWithoutOptionSetDescriptionInput>;

    @Field(() => DeviceCreateManyOptionSetDescriptionInputEnvelope, {nullable:true})
    createMany?: DeviceCreateManyOptionSetDescriptionInputEnvelope;

    @Field(() => [DeviceWhereUniqueInput], {nullable:true})
    connect?: Array<DeviceWhereUniqueInput>;
}
