import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceAuthorWhereUniqueInput } from './device-author-where-unique.input';
import { DeviceAuthorCreateWithoutAuthorInput } from './device-author-create-without-author.input';

@InputType()
export class DeviceAuthorCreateOrConnectWithoutAuthorInput {

    @Field(() => DeviceAuthorWhereUniqueInput, {nullable:false})
    where!: DeviceAuthorWhereUniqueInput;

    @Field(() => DeviceAuthorCreateWithoutAuthorInput, {nullable:false})
    create!: DeviceAuthorCreateWithoutAuthorInput;
}
