import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementSetDescriptionCreateWithoutOverviewsInput } from './measurement-set-description-create-without-overviews.input';
import { MeasurementSetDescriptionCreateOrConnectWithoutOverviewsInput } from './measurement-set-description-create-or-connect-without-overviews.input';
import { MeasurementSetDescriptionUpsertWithoutOverviewsInput } from './measurement-set-description-upsert-without-overviews.input';
import { MeasurementSetDescriptionWhereUniqueInput } from './measurement-set-description-where-unique.input';
import { MeasurementSetDescriptionUpdateWithoutOverviewsInput } from './measurement-set-description-update-without-overviews.input';

@InputType()
export class MeasurementSetDescriptionUpdateOneRequiredWithoutOverviewsInput {

    @Field(() => MeasurementSetDescriptionCreateWithoutOverviewsInput, {nullable:true})
    create?: MeasurementSetDescriptionCreateWithoutOverviewsInput;

    @Field(() => MeasurementSetDescriptionCreateOrConnectWithoutOverviewsInput, {nullable:true})
    connectOrCreate?: MeasurementSetDescriptionCreateOrConnectWithoutOverviewsInput;

    @Field(() => MeasurementSetDescriptionUpsertWithoutOverviewsInput, {nullable:true})
    upsert?: MeasurementSetDescriptionUpsertWithoutOverviewsInput;

    @Field(() => MeasurementSetDescriptionWhereUniqueInput, {nullable:true})
    connect?: MeasurementSetDescriptionWhereUniqueInput;

    @Field(() => MeasurementSetDescriptionUpdateWithoutOverviewsInput, {nullable:true})
    update?: MeasurementSetDescriptionUpdateWithoutOverviewsInput;
}
