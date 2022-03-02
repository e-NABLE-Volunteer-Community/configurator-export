import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceAuthorWhereInput } from './device-author-where.input';

@InputType()
export class DeviceAuthorListRelationFilter {

    @Field(() => DeviceAuthorWhereInput, {nullable:true})
    every?: DeviceAuthorWhereInput;

    @Field(() => DeviceAuthorWhereInput, {nullable:true})
    some?: DeviceAuthorWhereInput;

    @Field(() => DeviceAuthorWhereInput, {nullable:true})
    none?: DeviceAuthorWhereInput;
}
