import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementDescriptionWhereUniqueInput } from './measurement-description-where-unique.input';
import { MeasurementDescriptionCreateWithoutMeasurementSetDescriptionInput } from './measurement-description-create-without-measurement-set-description.input';

@InputType()
export class MeasurementDescriptionCreateOrConnectWithoutMeasurementSetDescriptionInput {

    @Field(() => MeasurementDescriptionWhereUniqueInput, {nullable:false})
    where!: MeasurementDescriptionWhereUniqueInput;

    @Field(() => MeasurementDescriptionCreateWithoutMeasurementSetDescriptionInput, {nullable:false})
    create!: MeasurementDescriptionCreateWithoutMeasurementSetDescriptionInput;
}
