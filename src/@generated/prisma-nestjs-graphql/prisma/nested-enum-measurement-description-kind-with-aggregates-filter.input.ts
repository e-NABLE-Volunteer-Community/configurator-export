import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementDescriptionKind } from './measurement-description-kind.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumMeasurementDescriptionKindFilter } from './nested-enum-measurement-description-kind-filter.input';

@InputType()
export class NestedEnumMeasurementDescriptionKindWithAggregatesFilter {

    @Field(() => MeasurementDescriptionKind, {nullable:true})
    equals?: keyof typeof MeasurementDescriptionKind;

    @Field(() => [MeasurementDescriptionKind], {nullable:true})
    in?: Array<keyof typeof MeasurementDescriptionKind>;

    @Field(() => [MeasurementDescriptionKind], {nullable:true})
    notIn?: Array<keyof typeof MeasurementDescriptionKind>;

    @Field(() => NestedEnumMeasurementDescriptionKindWithAggregatesFilter, {nullable:true})
    not?: NestedEnumMeasurementDescriptionKindWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumMeasurementDescriptionKindFilter, {nullable:true})
    _min?: NestedEnumMeasurementDescriptionKindFilter;

    @Field(() => NestedEnumMeasurementDescriptionKindFilter, {nullable:true})
    _max?: NestedEnumMeasurementDescriptionKindFilter;
}
