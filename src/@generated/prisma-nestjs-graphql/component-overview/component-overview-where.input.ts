import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { ComponentRelationFilter } from '../component/component-relation-filter.input';

@InputType()
export class ComponentOverviewWhereInput {

    @Field(() => [ComponentOverviewWhereInput], {nullable:true})
    AND?: Array<ComponentOverviewWhereInput>;

    @Field(() => [ComponentOverviewWhereInput], {nullable:true})
    OR?: Array<ComponentOverviewWhereInput>;

    @Field(() => [ComponentOverviewWhereInput], {nullable:true})
    NOT?: Array<ComponentOverviewWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    componentId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    locale?: StringFilter;

    @Field(() => ComponentRelationFilter, {nullable:true})
    component?: ComponentRelationFilter;
}
