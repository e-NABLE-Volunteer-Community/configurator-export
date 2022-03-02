import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DeviceOrderByWithRelationInput } from '../device/device-order-by-with-relation.input';
import { AuthorOrderByWithRelationInput } from '../author/author-order-by-with-relation.input';

@InputType()
export class DeviceAuthorOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    deviceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;

    @Field(() => DeviceOrderByWithRelationInput, {nullable:true})
    device?: DeviceOrderByWithRelationInput;

    @Field(() => AuthorOrderByWithRelationInput, {nullable:true})
    author?: AuthorOrderByWithRelationInput;
}
