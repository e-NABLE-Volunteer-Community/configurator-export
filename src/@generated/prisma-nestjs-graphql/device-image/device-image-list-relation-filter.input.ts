import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceImageWhereInput } from './device-image-where.input';

@InputType()
export class DeviceImageListRelationFilter {

    @Field(() => DeviceImageWhereInput, {nullable:true})
    every?: DeviceImageWhereInput;

    @Field(() => DeviceImageWhereInput, {nullable:true})
    some?: DeviceImageWhereInput;

    @Field(() => DeviceImageWhereInput, {nullable:true})
    none?: DeviceImageWhereInput;
}
