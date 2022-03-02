import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasurementDescriptionWhereInput } from './measurement-description-where.input';
import { MeasurementDescriptionOrderByWithRelationInput } from './measurement-description-order-by-with-relation.input';
import { MeasurementDescriptionWhereUniqueInput } from './measurement-description-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MeasurementDescriptionScalarFieldEnum } from './measurement-description-scalar-field.enum';

@ArgsType()
export class FindFirstMeasurementDescriptionArgs {

    @Field(() => MeasurementDescriptionWhereInput, {nullable:true})
    where?: MeasurementDescriptionWhereInput;

    @Field(() => [MeasurementDescriptionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MeasurementDescriptionOrderByWithRelationInput>;

    @Field(() => MeasurementDescriptionWhereUniqueInput, {nullable:true})
    cursor?: MeasurementDescriptionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MeasurementDescriptionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MeasurementDescriptionScalarFieldEnum>;
}
