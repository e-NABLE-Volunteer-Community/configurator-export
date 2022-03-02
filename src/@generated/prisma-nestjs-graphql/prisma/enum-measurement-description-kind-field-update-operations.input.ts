import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementDescriptionKind } from './measurement-description-kind.enum';

@InputType()
export class EnumMeasurementDescriptionKindFieldUpdateOperationsInput {

    @Field(() => MeasurementDescriptionKind, {nullable:true})
    set?: keyof typeof MeasurementDescriptionKind;
}
