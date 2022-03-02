import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumComponentParameterKindWithAggregatesFilter } from '../prisma/enum-component-parameter-kind-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class ComponentParameterScalarWhereWithAggregatesInput {

    @Field(() => [ComponentParameterScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ComponentParameterScalarWhereWithAggregatesInput>;

    @Field(() => [ComponentParameterScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ComponentParameterScalarWhereWithAggregatesInput>;

    @Field(() => [ComponentParameterScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ComponentParameterScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    componentId?: IntWithAggregatesFilter;

    @Field(() => EnumComponentParameterKindWithAggregatesFilter, {nullable:true})
    kind?: EnumComponentParameterKindWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    cadName?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    humanName?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;
}
