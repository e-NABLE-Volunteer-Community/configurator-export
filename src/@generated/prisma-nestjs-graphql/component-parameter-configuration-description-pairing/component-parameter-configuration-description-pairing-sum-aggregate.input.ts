import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ComponentParameterConfigurationDescriptionPairingSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    componentParameterId?: true;

    @Field(() => Boolean, {nullable:true})
    configurationDescriptionId?: true;
}
