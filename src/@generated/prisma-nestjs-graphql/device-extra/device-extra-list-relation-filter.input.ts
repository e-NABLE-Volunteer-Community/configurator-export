import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceExtraWhereInput } from './device-extra-where.input';

@InputType()
export class DeviceExtraListRelationFilter {

    @Field(() => DeviceExtraWhereInput, {nullable:true})
    every?: DeviceExtraWhereInput;

    @Field(() => DeviceExtraWhereInput, {nullable:true})
    some?: DeviceExtraWhereInput;

    @Field(() => DeviceExtraWhereInput, {nullable:true})
    none?: DeviceExtraWhereInput;
}
