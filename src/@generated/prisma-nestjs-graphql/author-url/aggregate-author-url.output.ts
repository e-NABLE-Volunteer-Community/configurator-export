import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AuthorUrlCountAggregate } from './author-url-count-aggregate.output';
import { AuthorUrlAvgAggregate } from './author-url-avg-aggregate.output';
import { AuthorUrlSumAggregate } from './author-url-sum-aggregate.output';
import { AuthorUrlMinAggregate } from './author-url-min-aggregate.output';
import { AuthorUrlMaxAggregate } from './author-url-max-aggregate.output';

@ObjectType()
export class AggregateAuthorUrl {

    @Field(() => AuthorUrlCountAggregate, {nullable:true})
    _count?: AuthorUrlCountAggregate;

    @Field(() => AuthorUrlAvgAggregate, {nullable:true})
    _avg?: AuthorUrlAvgAggregate;

    @Field(() => AuthorUrlSumAggregate, {nullable:true})
    _sum?: AuthorUrlSumAggregate;

    @Field(() => AuthorUrlMinAggregate, {nullable:true})
    _min?: AuthorUrlMinAggregate;

    @Field(() => AuthorUrlMaxAggregate, {nullable:true})
    _max?: AuthorUrlMaxAggregate;
}
