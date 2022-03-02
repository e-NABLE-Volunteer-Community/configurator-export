import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ComponentOverviewScalarWhereInput {

    @Field(() => [ComponentOverviewScalarWhereInput], {nullable:true})
    AND?: Array<ComponentOverviewScalarWhereInput>;

    @Field(() => [ComponentOverviewScalarWhereInput], {nullable:true})
    OR?: Array<ComponentOverviewScalarWhereInput>;

    @Field(() => [ComponentOverviewScalarWhereInput], {nullable:true})
    NOT?: Array<ComponentOverviewScalarWhereInput>;

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
}
