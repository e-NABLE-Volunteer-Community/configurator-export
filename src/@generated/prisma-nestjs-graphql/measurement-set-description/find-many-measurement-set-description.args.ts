import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasurementSetDescriptionWhereInput } from './measurement-set-description-where.input';
import { MeasurementSetDescriptionOrderByWithRelationInput } from './measurement-set-description-order-by-with-relation.input';
import { MeasurementSetDescriptionWhereUniqueInput } from './measurement-set-description-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MeasurementSetDescriptionScalarFieldEnum } from './measurement-set-description-scalar-field.enum';

@ArgsType()
export class FindManyMeasurementSetDescriptionArgs {

    @Field(() => MeasurementSetDescriptionWhereInput, {nullable:true})
    where?: MeasurementSetDescriptionWhereInput;

    @Field(() => [MeasurementSetDescriptionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MeasurementSetDescriptionOrderByWithRelationInput>;

    @Field(() => MeasurementSetDescriptionWhereUniqueInput, {nullable:true})
    cursor?: MeasurementSetDescriptionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MeasurementSetDescriptionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MeasurementSetDescriptionScalarFieldEnum>;
}
