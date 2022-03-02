import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AuthorBioOrderByRelationAggregateInput } from '../author-bio/author-bio-order-by-relation-aggregate.input';
import { AuthorUrlOrderByRelationAggregateInput } from '../author-url/author-url-order-by-relation-aggregate.input';
import { DeviceAuthorOrderByRelationAggregateInput } from '../device-author/device-author-order-by-relation-aggregate.input';

@InputType()
export class AuthorOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => AuthorBioOrderByRelationAggregateInput, {nullable:true})
    authorBio?: AuthorBioOrderByRelationAggregateInput;

    @Field(() => AuthorUrlOrderByRelationAggregateInput, {nullable:true})
    authorUrl?: AuthorUrlOrderByRelationAggregateInput;

    @Field(() => DeviceAuthorOrderByRelationAggregateInput, {nullable:true})
    deviceAuthor?: DeviceAuthorOrderByRelationAggregateInput;
}
