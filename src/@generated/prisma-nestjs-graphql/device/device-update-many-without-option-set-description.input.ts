import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceCreateWithoutOptionSetDescriptionInput } from './device-create-without-option-set-description.input';
import { DeviceCreateOrConnectWithoutOptionSetDescriptionInput } from './device-create-or-connect-without-option-set-description.input';
import { DeviceUpsertWithWhereUniqueWithoutOptionSetDescriptionInput } from './device-upsert-with-where-unique-without-option-set-description.input';
import { DeviceCreateManyOptionSetDescriptionInputEnvelope } from './device-create-many-option-set-description-input-envelope.input';
import { DeviceWhereUniqueInput } from './device-where-unique.input';
import { DeviceUpdateWithWhereUniqueWithoutOptionSetDescriptionInput } from './device-update-with-where-unique-without-option-set-description.input';
import { DeviceUpdateManyWithWhereWithoutOptionSetDescriptionInput } from './device-update-many-with-where-without-option-set-description.input';
import { DeviceScalarWhereInput } from './device-scalar-where.input';

@InputType()
export class DeviceUpdateManyWithoutOptionSetDescriptionInput {

    @Field(() => [DeviceCreateWithoutOptionSetDescriptionInput], {nullable:true})
    create?: Array<DeviceCreateWithoutOptionSetDescriptionInput>;

    @Field(() => [DeviceCreateOrConnectWithoutOptionSetDescriptionInput], {nullable:true})
    connectOrCreate?: Array<DeviceCreateOrConnectWithoutOptionSetDescriptionInput>;

    @Field(() => [DeviceUpsertWithWhereUniqueWithoutOptionSetDescriptionInput], {nullable:true})
    upsert?: Array<DeviceUpsertWithWhereUniqueWithoutOptionSetDescriptionInput>;

    @Field(() => DeviceCreateManyOptionSetDescriptionInputEnvelope, {nullable:true})
    createMany?: DeviceCreateManyOptionSetDescriptionInputEnvelope;

    @Field(() => [DeviceWhereUniqueInput], {nullable:true})
    set?: Array<DeviceWhereUniqueInput>;

    @Field(() => [DeviceWhereUniqueInput], {nullable:true})
    disconnect?: Array<DeviceWhereUniqueInput>;

    @Field(() => [DeviceWhereUniqueInput], {nullable:true})
    delete?: Array<DeviceWhereUniqueInput>;

    @Field(() => [DeviceWhereUniqueInput], {nullable:true})
    connect?: Array<DeviceWhereUniqueInput>;

    @Field(() => [DeviceUpdateWithWhereUniqueWithoutOptionSetDescriptionInput], {nullable:true})
    update?: Array<DeviceUpdateWithWhereUniqueWithoutOptionSetDescriptionInput>;

    @Field(() => [DeviceUpdateManyWithWhereWithoutOptionSetDescriptionInput], {nullable:true})
    updateMany?: Array<DeviceUpdateManyWithWhereWithoutOptionSetDescriptionInput>;

    @Field(() => [DeviceScalarWhereInput], {nullable:true})
    deleteMany?: Array<DeviceScalarWhereInput>;
}
