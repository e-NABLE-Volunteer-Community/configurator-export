import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceImageWhereInput } from './device-image-where.input';
import { DeviceImageOrderByWithRelationInput } from './device-image-order-by-with-relation.input';
import { DeviceImageWhereUniqueInput } from './device-image-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DeviceImageScalarFieldEnum } from './device-image-scalar-field.enum';

@ArgsType()
export class FindManyDeviceImageArgs {

    @Field(() => DeviceImageWhereInput, {nullable:true})
    where?: DeviceImageWhereInput;

    @Field(() => [DeviceImageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DeviceImageOrderByWithRelationInput>;

    @Field(() => DeviceImageWhereUniqueInput, {nullable:true})
    cursor?: DeviceImageWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DeviceImageScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DeviceImageScalarFieldEnum>;
}
