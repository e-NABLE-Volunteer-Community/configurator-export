import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementDescriptionKind } from './measurement-description-kind.enum';

@InputType()
export class NestedEnumMeasurementDescriptionKindFilter {

    @Field(() => MeasurementDescriptionKind, {nullable:true})
    equals?: keyof typeof MeasurementDescriptionKind;

    @Field(() => [MeasurementDescriptionKind], {nullable:true})
    in?: Array<keyof typeof MeasurementDescriptionKind>;

    @Field(() => [MeasurementDescriptionKind], {nullable:true})
    notIn?: Array<keyof typeof MeasurementDescriptionKind>;

    @Field(() => NestedEnumMeasurementDescriptionKindFilter, {nullable:true})
    not?: NestedEnumMeasurementDescriptionKindFilter;
}
