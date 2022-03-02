import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ConfigurationSetDescriptionUpdateOneRequiredWithoutOverviewsInput } from '../configuration-set-description/configuration-set-description-update-one-required-without-overviews.input';

@InputType()
export class ConfigurationSetDescriptionOverviewUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    locale?: StringFieldUpdateOperationsInput;

    @Field(() => ConfigurationSetDescriptionUpdateOneRequiredWithoutOverviewsInput, {nullable:true})
    configurationSetDescription?: ConfigurationSetDescriptionUpdateOneRequiredWithoutOverviewsInput;
}
