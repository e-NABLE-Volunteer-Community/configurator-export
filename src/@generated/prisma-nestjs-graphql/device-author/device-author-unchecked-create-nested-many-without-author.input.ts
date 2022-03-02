import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceAuthorCreateWithoutAuthorInput } from './device-author-create-without-author.input';
import { DeviceAuthorCreateOrConnectWithoutAuthorInput } from './device-author-create-or-connect-without-author.input';
import { DeviceAuthorCreateManyAuthorInputEnvelope } from './device-author-create-many-author-input-envelope.input';
import { DeviceAuthorWhereUniqueInput } from './device-author-where-unique.input';

@InputType()
export class DeviceAuthorUncheckedCreateNestedManyWithoutAuthorInput {

    @Field(() => [DeviceAuthorCreateWithoutAuthorInput], {nullable:true})
    create?: Array<DeviceAuthorCreateWithoutAuthorInput>;

    @Field(() => [DeviceAuthorCreateOrConnectWithoutAuthorInput], {nullable:true})
    connectOrCreate?: Array<DeviceAuthorCreateOrConnectWithoutAuthorInput>;

    @Field(() => DeviceAuthorCreateManyAuthorInputEnvelope, {nullable:true})
    createMany?: DeviceAuthorCreateManyAuthorInputEnvelope;

    @Field(() => [DeviceAuthorWhereUniqueInput], {nullable:true})
    connect?: Array<DeviceAuthorWhereUniqueInput>;
}
