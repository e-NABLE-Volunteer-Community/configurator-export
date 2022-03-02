import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class DeviceImageCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    deviceId!: number;

    @Field(() => String, {nullable:false})
    image!: string;

    @Field(() => String, {nullable:true})
    locale?: string;
}
