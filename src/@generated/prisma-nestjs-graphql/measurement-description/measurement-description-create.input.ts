import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementDescriptionKind } from '../prisma/measurement-description-kind.enum';
import { MeasurementSetDescriptionCreateNestedOneWithoutMeasurementsInput } from '../measurement-set-description/measurement-set-description-create-nested-one-without-measurements.input';
import { MeasurementDescriptionOverviewCreateNestedManyWithoutMeasurementDescriptionInput } from '../measurement-description-overview/measurement-description-overview-create-nested-many-without-measurement-description.input';

@InputType()
export class MeasurementDescriptionCreateInput {

    @Field(() => MeasurementDescriptionKind, {nullable:false})
    kind!: keyof typeof MeasurementDescriptionKind;

    @Field(() => MeasurementSetDescriptionCreateNestedOneWithoutMeasurementsInput, {nullable:false})
    measurementSetDescription!: MeasurementSetDescriptionCreateNestedOneWithoutMeasurementsInput;

    @Field(() => MeasurementDescriptionOverviewCreateNestedManyWithoutMeasurementDescriptionInput, {nullable:true})
    overviews?: MeasurementDescriptionOverviewCreateNestedManyWithoutMeasurementDescriptionInput;
}
