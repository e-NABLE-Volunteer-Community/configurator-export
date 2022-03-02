import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterWhereUniqueInput } from './component-parameter-where-unique.input';
import { ComponentParameterCreateWithoutPairingsInput } from './component-parameter-create-without-pairings.input';

@InputType()
export class ComponentParameterCreateOrConnectWithoutPairingsInput {

    @Field(() => ComponentParameterWhereUniqueInput, {nullable:false})
    where!: ComponentParameterWhereUniqueInput;

    @Field(() => ComponentParameterCreateWithoutPairingsInput, {nullable:false})
    create!: ComponentParameterCreateWithoutPairingsInput;
}
