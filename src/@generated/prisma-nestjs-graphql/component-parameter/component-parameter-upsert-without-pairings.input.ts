import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterUpdateWithoutPairingsInput } from './component-parameter-update-without-pairings.input';
import { ComponentParameterCreateWithoutPairingsInput } from './component-parameter-create-without-pairings.input';

@InputType()
export class ComponentParameterUpsertWithoutPairingsInput {

    @Field(() => ComponentParameterUpdateWithoutPairingsInput, {nullable:false})
    update!: ComponentParameterUpdateWithoutPairingsInput;

    @Field(() => ComponentParameterCreateWithoutPairingsInput, {nullable:false})
    create!: ComponentParameterCreateWithoutPairingsInput;
}
