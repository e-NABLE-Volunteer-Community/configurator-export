import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementDescriptionKind } from './measurement-description-kind.enum';
import { NestedEnumMeasurementDescriptionKindFilter } from './nested-enum-measurement-description-kind-filter.input';

@InputType()
export class EnumMeasurementDescriptionKindFilter {

    @Field(() => MeasurementDescriptionKind, {nullable:true})
    equals?: keyof typeof MeasurementDescriptionKind;

    @Field(() => [MeasurementDescriptionKind], {nullable:true})
    in?: Array<keyof typeof MeasurementDescriptionKind>;

    @Field(() => [MeasurementDescriptionKind], {nullable:true})
    notIn?: Array<keyof typeof MeasurementDescriptionKind>;

    @Field(() => NestedEnumMeasurementDescriptionKindFilter, {nullable:true})
    not?: NestedEnumMeasurementDescriptionKindFilter;
}
