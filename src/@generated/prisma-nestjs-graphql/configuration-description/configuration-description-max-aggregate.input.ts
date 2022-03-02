import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ConfigurationDescriptionMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    configurationSetDescriptionId?: true;

    @Field(() => Boolean, {nullable:true})
    kind?: true;
}
