import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasurementDescriptionOverviewWhereInput } from './measurement-description-overview-where.input';
import { MeasurementDescriptionOverviewOrderByWithRelationInput } from './measurement-description-overview-order-by-with-relation.input';
import { MeasurementDescriptionOverviewWhereUniqueInput } from './measurement-description-overview-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MeasurementDescriptionOverviewScalarFieldEnum } from './measurement-description-overview-scalar-field.enum';

@ArgsType()
export class FindFirstMeasurementDescriptionOverviewArgs {

    @Field(() => MeasurementDescriptionOverviewWhereInput, {nullable:true})
    where?: MeasurementDescriptionOverviewWhereInput;

    @Field(() => [MeasurementDescriptionOverviewOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MeasurementDescriptionOverviewOrderByWithRelationInput>;

    @Field(() => MeasurementDescriptionOverviewWhereUniqueInput, {nullable:true})
    cursor?: MeasurementDescriptionOverviewWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MeasurementDescriptionOverviewScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MeasurementDescriptionOverviewScalarFieldEnum>;
}
