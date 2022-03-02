import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class DeviceAuthorCreateManyDeviceInput {

    @Field(() => Int, {nullable:false})
    authorId!: number;
}
