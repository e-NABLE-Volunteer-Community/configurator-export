import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementSetDescriptionWhereUniqueInput } from './measurement-set-description-where-unique.input';
import { MeasurementSetDescriptionCreateWithoutOverviewsInput } from './measurement-set-description-create-without-overviews.input';

@InputType()
export class MeasurementSetDescriptionCreateOrConnectWithoutOverviewsInput {

    @Field(() => MeasurementSetDescriptionWhereUniqueInput, {nullable:false})
    where!: MeasurementSetDescriptionWhereUniqueInput;

    @Field(() => MeasurementSetDescriptionCreateWithoutOverviewsInput, {nullable:false})
    create!: MeasurementSetDescriptionCreateWithoutOverviewsInput;
}
