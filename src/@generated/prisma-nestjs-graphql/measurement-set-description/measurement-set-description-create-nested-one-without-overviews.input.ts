import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementSetDescriptionCreateWithoutOverviewsInput } from './measurement-set-description-create-without-overviews.input';
import { MeasurementSetDescriptionCreateOrConnectWithoutOverviewsInput } from './measurement-set-description-create-or-connect-without-overviews.input';
import { MeasurementSetDescriptionWhereUniqueInput } from './measurement-set-description-where-unique.input';

@InputType()
export class MeasurementSetDescriptionCreateNestedOneWithoutOverviewsInput {

    @Field(() => MeasurementSetDescriptionCreateWithoutOverviewsInput, {nullable:true})
    create?: MeasurementSetDescriptionCreateWithoutOverviewsInput;

    @Field(() => MeasurementSetDescriptionCreateOrConnectWithoutOverviewsInput, {nullable:true})
    connectOrCreate?: MeasurementSetDescriptionCreateOrConnectWithoutOverviewsInput;

    @Field(() => MeasurementSetDescriptionWhereUniqueInput, {nullable:true})
    connect?: MeasurementSetDescriptionWhereUniqueInput;
}
