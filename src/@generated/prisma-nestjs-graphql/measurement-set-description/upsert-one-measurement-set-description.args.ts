import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasurementSetDescriptionWhereUniqueInput } from './measurement-set-description-where-unique.input';
import { MeasurementSetDescriptionCreateInput } from './measurement-set-description-create.input';
import { MeasurementSetDescriptionUpdateInput } from './measurement-set-description-update.input';

@ArgsType()
export class UpsertOneMeasurementSetDescriptionArgs {

    @Field(() => MeasurementSetDescriptionWhereUniqueInput, {nullable:false})
    where!: MeasurementSetDescriptionWhereUniqueInput;

    @Field(() => MeasurementSetDescriptionCreateInput, {nullable:false})
    create!: MeasurementSetDescriptionCreateInput;

    @Field(() => MeasurementSetDescriptionUpdateInput, {nullable:false})
    update!: MeasurementSetDescriptionUpdateInput;
}
