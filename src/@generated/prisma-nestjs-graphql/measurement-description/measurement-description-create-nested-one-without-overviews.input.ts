import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementDescriptionCreateWithoutOverviewsInput } from './measurement-description-create-without-overviews.input';
import { MeasurementDescriptionCreateOrConnectWithoutOverviewsInput } from './measurement-description-create-or-connect-without-overviews.input';
import { MeasurementDescriptionWhereUniqueInput } from './measurement-description-where-unique.input';

@InputType()
export class MeasurementDescriptionCreateNestedOneWithoutOverviewsInput {

    @Field(() => MeasurementDescriptionCreateWithoutOverviewsInput, {nullable:true})
    create?: MeasurementDescriptionCreateWithoutOverviewsInput;

    @Field(() => MeasurementDescriptionCreateOrConnectWithoutOverviewsInput, {nullable:true})
    connectOrCreate?: MeasurementDescriptionCreateOrConnectWithoutOverviewsInput;

    @Field(() => MeasurementDescriptionWhereUniqueInput, {nullable:true})
    connect?: MeasurementDescriptionWhereUniqueInput;
}
