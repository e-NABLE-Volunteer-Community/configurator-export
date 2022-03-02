import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MeasurementSetDescriptionUpdateOneRequiredWithoutOverviewsInput } from '../measurement-set-description/measurement-set-description-update-one-required-without-overviews.input';

@InputType()
export class MeasurementSetDescriptionOverviewUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    locale?: StringFieldUpdateOperationsInput;

    @Field(() => MeasurementSetDescriptionUpdateOneRequiredWithoutOverviewsInput, {nullable:true})
    measurementSetDescription?: MeasurementSetDescriptionUpdateOneRequiredWithoutOverviewsInput;
}
