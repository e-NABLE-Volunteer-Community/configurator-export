import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementDescriptionKind } from '../prisma/measurement-description-kind.enum';
import { MeasurementDescriptionOverviewCreateNestedManyWithoutMeasurementDescriptionInput } from '../measurement-description-overview/measurement-description-overview-create-nested-many-without-measurement-description.input';

@InputType()
export class MeasurementDescriptionCreateWithoutMeasurementSetDescriptionInput {

    @Field(() => MeasurementDescriptionKind, {nullable:false})
    kind!: keyof typeof MeasurementDescriptionKind;

    @Field(() => MeasurementDescriptionOverviewCreateNestedManyWithoutMeasurementDescriptionInput, {nullable:true})
    overviews?: MeasurementDescriptionOverviewCreateNestedManyWithoutMeasurementDescriptionInput;
}
