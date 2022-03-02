import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasurementSetDescriptionOverviewWhereInput } from './measurement-set-description-overview-where.input';
import { MeasurementSetDescriptionOverviewOrderByWithRelationInput } from './measurement-set-description-overview-order-by-with-relation.input';
import { MeasurementSetDescriptionOverviewWhereUniqueInput } from './measurement-set-description-overview-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MeasurementSetDescriptionOverviewScalarFieldEnum } from './measurement-set-description-overview-scalar-field.enum';

@ArgsType()
export class FindManyMeasurementSetDescriptionOverviewArgs {

    @Field(() => MeasurementSetDescriptionOverviewWhereInput, {nullable:true})
    where?: MeasurementSetDescriptionOverviewWhereInput;

    @Field(() => [MeasurementSetDescriptionOverviewOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MeasurementSetDescriptionOverviewOrderByWithRelationInput>;

    @Field(() => MeasurementSetDescriptionOverviewWhereUniqueInput, {nullable:true})
    cursor?: MeasurementSetDescriptionOverviewWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MeasurementSetDescriptionOverviewScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MeasurementSetDescriptionOverviewScalarFieldEnum>;
}
