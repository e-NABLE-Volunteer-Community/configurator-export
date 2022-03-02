import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumComponentParameterKindFilter } from '../prisma/enum-component-parameter-kind-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ComponentParameterScalarWhereInput {

    @Field(() => [ComponentParameterScalarWhereInput], {nullable:true})
    AND?: Array<ComponentParameterScalarWhereInput>;

    @Field(() => [ComponentParameterScalarWhereInput], {nullable:true})
    OR?: Array<ComponentParameterScalarWhereInput>;

    @Field(() => [ComponentParameterScalarWhereInput], {nullable:true})
    NOT?: Array<ComponentParameterScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    componentId?: IntFilter;

    @Field(() => EnumComponentParameterKindFilter, {nullable:true})
    kind?: EnumComponentParameterKindFilter;

    @Field(() => StringFilter, {nullable:true})
    cadName?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    humanName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;
}
