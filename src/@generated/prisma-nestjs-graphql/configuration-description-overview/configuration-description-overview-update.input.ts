import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ConfigurationDescriptionUpdateOneRequiredWithoutOverviewsInput } from '../configuration-description/configuration-description-update-one-required-without-overviews.input';

@InputType()
export class ConfigurationDescriptionOverviewUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    locale?: StringFieldUpdateOperationsInput;

    @Field(() => ConfigurationDescriptionUpdateOneRequiredWithoutOverviewsInput, {nullable:true})
    configurationDescription?: ConfigurationDescriptionUpdateOneRequiredWithoutOverviewsInput;
}
