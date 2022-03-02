import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementDescriptionWhereUniqueInput } from './measurement-description-where-unique.input';
import { MeasurementDescriptionCreateWithoutOverviewsInput } from './measurement-description-create-without-overviews.input';

@InputType()
export class MeasurementDescriptionCreateOrConnectWithoutOverviewsInput {

    @Field(() => MeasurementDescriptionWhereUniqueInput, {nullable:false})
    where!: MeasurementDescriptionWhereUniqueInput;

    @Field(() => MeasurementDescriptionCreateWithoutOverviewsInput, {nullable:false})
    create!: MeasurementDescriptionCreateWithoutOverviewsInput;
}
