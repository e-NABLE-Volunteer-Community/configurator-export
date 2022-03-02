import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementDescriptionCreateWithoutOverviewsInput } from './measurement-description-create-without-overviews.input';
import { MeasurementDescriptionCreateOrConnectWithoutOverviewsInput } from './measurement-description-create-or-connect-without-overviews.input';
import { MeasurementDescriptionUpsertWithoutOverviewsInput } from './measurement-description-upsert-without-overviews.input';
import { MeasurementDescriptionWhereUniqueInput } from './measurement-description-where-unique.input';
import { MeasurementDescriptionUpdateWithoutOverviewsInput } from './measurement-description-update-without-overviews.input';

@InputType()
export class MeasurementDescriptionUpdateOneRequiredWithoutOverviewsInput {

    @Field(() => MeasurementDescriptionCreateWithoutOverviewsInput, {nullable:true})
    create?: MeasurementDescriptionCreateWithoutOverviewsInput;

    @Field(() => MeasurementDescriptionCreateOrConnectWithoutOverviewsInput, {nullable:true})
    connectOrCreate?: MeasurementDescriptionCreateOrConnectWithoutOverviewsInput;

    @Field(() => MeasurementDescriptionUpsertWithoutOverviewsInput, {nullable:true})
    upsert?: MeasurementDescriptionUpsertWithoutOverviewsInput;

    @Field(() => MeasurementDescriptionWhereUniqueInput, {nullable:true})
    connect?: MeasurementDescriptionWhereUniqueInput;

    @Field(() => MeasurementDescriptionUpdateWithoutOverviewsInput, {nullable:true})
    update?: MeasurementDescriptionUpdateWithoutOverviewsInput;
}
