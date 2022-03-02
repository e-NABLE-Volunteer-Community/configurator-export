import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MeasurementDescriptionUpdateOneRequiredWithoutOverviewsInput } from '../measurement-description/measurement-description-update-one-required-without-overviews.input';

@InputType()
export class MeasurementDescriptionOverviewUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    locale?: StringFieldUpdateOperationsInput;

    @Field(() => MeasurementDescriptionUpdateOneRequiredWithoutOverviewsInput, {nullable:true})
    measurementDescription?: MeasurementDescriptionUpdateOneRequiredWithoutOverviewsInput;
}
