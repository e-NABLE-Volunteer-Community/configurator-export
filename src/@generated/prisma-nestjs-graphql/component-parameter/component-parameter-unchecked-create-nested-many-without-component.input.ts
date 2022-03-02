import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterCreateWithoutComponentInput } from './component-parameter-create-without-component.input';
import { ComponentParameterCreateOrConnectWithoutComponentInput } from './component-parameter-create-or-connect-without-component.input';
import { ComponentParameterCreateManyComponentInputEnvelope } from './component-parameter-create-many-component-input-envelope.input';
import { ComponentParameterWhereUniqueInput } from './component-parameter-where-unique.input';

@InputType()
export class ComponentParameterUncheckedCreateNestedManyWithoutComponentInput {

    @Field(() => [ComponentParameterCreateWithoutComponentInput], {nullable:true})
    create?: Array<ComponentParameterCreateWithoutComponentInput>;

    @Field(() => [ComponentParameterCreateOrConnectWithoutComponentInput], {nullable:true})
    connectOrCreate?: Array<ComponentParameterCreateOrConnectWithoutComponentInput>;

    @Field(() => ComponentParameterCreateManyComponentInputEnvelope, {nullable:true})
    createMany?: ComponentParameterCreateManyComponentInputEnvelope;

    @Field(() => [ComponentParameterWhereUniqueInput], {nullable:true})
    connect?: Array<ComponentParameterWhereUniqueInput>;
}
