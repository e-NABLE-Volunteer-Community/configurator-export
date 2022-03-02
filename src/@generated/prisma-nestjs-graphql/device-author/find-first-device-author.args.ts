import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceAuthorWhereInput } from './device-author-where.input';
import { DeviceAuthorOrderByWithRelationInput } from './device-author-order-by-with-relation.input';
import { DeviceAuthorWhereUniqueInput } from './device-author-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DeviceAuthorScalarFieldEnum } from './device-author-scalar-field.enum';

@ArgsType()
export class FindFirstDeviceAuthorArgs {

    @Field(() => DeviceAuthorWhereInput, {nullable:true})
    where?: DeviceAuthorWhereInput;

    @Field(() => [DeviceAuthorOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DeviceAuthorOrderByWithRelationInput>;

    @Field(() => DeviceAuthorWhereUniqueInput, {nullable:true})
    cursor?: DeviceAuthorWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DeviceAuthorScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DeviceAuthorScalarFieldEnum>;
}
