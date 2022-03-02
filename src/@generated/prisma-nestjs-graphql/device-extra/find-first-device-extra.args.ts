import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceExtraWhereInput } from './device-extra-where.input';
import { DeviceExtraOrderByWithRelationInput } from './device-extra-order-by-with-relation.input';
import { DeviceExtraWhereUniqueInput } from './device-extra-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DeviceExtraScalarFieldEnum } from './device-extra-scalar-field.enum';

@ArgsType()
export class FindFirstDeviceExtraArgs {

    @Field(() => DeviceExtraWhereInput, {nullable:true})
    where?: DeviceExtraWhereInput;

    @Field(() => [DeviceExtraOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DeviceExtraOrderByWithRelationInput>;

    @Field(() => DeviceExtraWhereUniqueInput, {nullable:true})
    cursor?: DeviceExtraWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DeviceExtraScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DeviceExtraScalarFieldEnum>;
}
