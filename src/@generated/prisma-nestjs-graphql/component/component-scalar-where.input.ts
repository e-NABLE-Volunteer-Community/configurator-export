import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class ComponentScalarWhereInput {

    @Field(() => [ComponentScalarWhereInput], {nullable:true})
    AND?: Array<ComponentScalarWhereInput>;

    @Field(() => [ComponentScalarWhereInput], {nullable:true})
    OR?: Array<ComponentScalarWhereInput>;

    @Field(() => [ComponentScalarWhereInput], {nullable:true})
    NOT?: Array<ComponentScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    deviceId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    count?: IntNullableFilter;

    @Field(() => JsonFilter, {nullable:true})
    location?: JsonFilter;

    @Field(() => StringFilter, {nullable:true})
    exportLocation?: StringFilter;
}
