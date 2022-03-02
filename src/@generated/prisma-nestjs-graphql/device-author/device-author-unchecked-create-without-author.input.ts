import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class DeviceAuthorUncheckedCreateWithoutAuthorInput {

    @Field(() => Int, {nullable:false})
    deviceId!: number;
}
