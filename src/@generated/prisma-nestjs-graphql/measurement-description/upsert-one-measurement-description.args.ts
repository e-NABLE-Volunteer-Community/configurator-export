import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasurementDescriptionWhereUniqueInput } from './measurement-description-where-unique.input';
import { MeasurementDescriptionCreateInput } from './measurement-description-create.input';
import { MeasurementDescriptionUpdateInput } from './measurement-description-update.input';

@ArgsType()
export class UpsertOneMeasurementDescriptionArgs {

    @Field(() => MeasurementDescriptionWhereUniqueInput, {nullable:false})
    where!: MeasurementDescriptionWhereUniqueInput;

    @Field(() => MeasurementDescriptionCreateInput, {nullable:false})
    create!: MeasurementDescriptionCreateInput;

    @Field(() => MeasurementDescriptionUpdateInput, {nullable:false})
    update!: MeasurementDescriptionUpdateInput;
}
