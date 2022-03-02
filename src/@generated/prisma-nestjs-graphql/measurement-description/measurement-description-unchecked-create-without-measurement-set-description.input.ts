import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MeasurementDescriptionKind } from '../prisma/measurement-description-kind.enum';
import { MeasurementDescriptionOverviewUncheckedCreateNestedManyWithoutMeasurementDescriptionInput } from '../measurement-description-overview/measurement-description-overview-unchecked-create-nested-many-without-measurement-description.input';

@InputType()
export class MeasurementDescriptionUncheckedCreateWithoutMeasurementSetDescriptionInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => MeasurementDescriptionKind, {nullable:false})
    kind!: keyof typeof MeasurementDescriptionKind;

    @Field(() => MeasurementDescriptionOverviewUncheckedCreateNestedManyWithoutMeasurementDescriptionInput, {nullable:true})
    overviews?: MeasurementDescriptionOverviewUncheckedCreateNestedManyWithoutMeasurementDescriptionInput;
}
