import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class DeviceAuthorUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    deviceId!: number;

    @Field(() => Int, {nullable:false})
    authorId!: number;
}
