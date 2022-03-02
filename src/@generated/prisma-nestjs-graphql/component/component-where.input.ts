import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DeviceRelationFilter } from '../device/device-relation-filter.input';
import { ComponentOverviewListRelationFilter } from '../component-overview/component-overview-list-relation-filter.input';
import { ComponentParameterListRelationFilter } from '../component-parameter/component-parameter-list-relation-filter.input';

@InputType()
export class ComponentWhereInput {

    @Field(() => [ComponentWhereInput], {nullable:true})
    AND?: Array<ComponentWhereInput>;

    @Field(() => [ComponentWhereInput], {nullable:true})
    OR?: Array<ComponentWhereInput>;

    @Field(() => [ComponentWhereInput], {nullable:true})
    NOT?: Array<ComponentWhereInput>;

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

    @Field(() => DeviceRelationFilter, {nullable:true})
    device?: DeviceRelationFilter;

    @Field(() => ComponentOverviewListRelationFilter, {nullable:true})
    componentOverviews?: ComponentOverviewListRelationFilter;

    @Field(() => ComponentParameterListRelationFilter, {nullable:true})
    parameters?: ComponentParameterListRelationFilter;
}
