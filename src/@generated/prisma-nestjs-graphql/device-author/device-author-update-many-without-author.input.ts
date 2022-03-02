import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceAuthorCreateWithoutAuthorInput } from './device-author-create-without-author.input';
import { DeviceAuthorCreateOrConnectWithoutAuthorInput } from './device-author-create-or-connect-without-author.input';
import { DeviceAuthorUpsertWithWhereUniqueWithoutAuthorInput } from './device-author-upsert-with-where-unique-without-author.input';
import { DeviceAuthorCreateManyAuthorInputEnvelope } from './device-author-create-many-author-input-envelope.input';
import { DeviceAuthorWhereUniqueInput } from './device-author-where-unique.input';
import { DeviceAuthorUpdateWithWhereUniqueWithoutAuthorInput } from './device-author-update-with-where-unique-without-author.input';
import { DeviceAuthorUpdateManyWithWhereWithoutAuthorInput } from './device-author-update-many-with-where-without-author.input';
import { DeviceAuthorScalarWhereInput } from './device-author-scalar-where.input';

@InputType()
export class DeviceAuthorUpdateManyWithoutAuthorInput {

    @Field(() => [DeviceAuthorCreateWithoutAuthorInput], {nullable:true})
    create?: Array<DeviceAuthorCreateWithoutAuthorInput>;

    @Field(() => [DeviceAuthorCreateOrConnectWithoutAuthorInput], {nullable:true})
    connectOrCreate?: Array<DeviceAuthorCreateOrConnectWithoutAuthorInput>;

    @Field(() => [DeviceAuthorUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    upsert?: Array<DeviceAuthorUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => DeviceAuthorCreateManyAuthorInputEnvelope, {nullable:true})
    createMany?: DeviceAuthorCreateManyAuthorInputEnvelope;

    @Field(() => [DeviceAuthorWhereUniqueInput], {nullable:true})
    set?: Array<DeviceAuthorWhereUniqueInput>;

    @Field(() => [DeviceAuthorWhereUniqueInput], {nullable:true})
    disconnect?: Array<DeviceAuthorWhereUniqueInput>;

    @Field(() => [DeviceAuthorWhereUniqueInput], {nullable:true})
    delete?: Array<DeviceAuthorWhereUniqueInput>;

    @Field(() => [DeviceAuthorWhereUniqueInput], {nullable:true})
    connect?: Array<DeviceAuthorWhereUniqueInput>;

    @Field(() => [DeviceAuthorUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    update?: Array<DeviceAuthorUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [DeviceAuthorUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    updateMany?: Array<DeviceAuthorUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [DeviceAuthorScalarWhereInput], {nullable:true})
    deleteMany?: Array<DeviceAuthorScalarWhereInput>;
}
