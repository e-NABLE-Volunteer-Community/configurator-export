import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterCreateWithoutComponentInput } from './component-parameter-create-without-component.input';
import { ComponentParameterCreateOrConnectWithoutComponentInput } from './component-parameter-create-or-connect-without-component.input';
import { ComponentParameterUpsertWithWhereUniqueWithoutComponentInput } from './component-parameter-upsert-with-where-unique-without-component.input';
import { ComponentParameterCreateManyComponentInputEnvelope } from './component-parameter-create-many-component-input-envelope.input';
import { ComponentParameterWhereUniqueInput } from './component-parameter-where-unique.input';
import { ComponentParameterUpdateWithWhereUniqueWithoutComponentInput } from './component-parameter-update-with-where-unique-without-component.input';
import { ComponentParameterUpdateManyWithWhereWithoutComponentInput } from './component-parameter-update-many-with-where-without-component.input';
import { ComponentParameterScalarWhereInput } from './component-parameter-scalar-where.input';

@InputType()
export class ComponentParameterUpdateManyWithoutComponentInput {

    @Field(() => [ComponentParameterCreateWithoutComponentInput], {nullable:true})
    create?: Array<ComponentParameterCreateWithoutComponentInput>;

    @Field(() => [ComponentParameterCreateOrConnectWithoutComponentInput], {nullable:true})
    connectOrCreate?: Array<ComponentParameterCreateOrConnectWithoutComponentInput>;

    @Field(() => [ComponentParameterUpsertWithWhereUniqueWithoutComponentInput], {nullable:true})
    upsert?: Array<ComponentParameterUpsertWithWhereUniqueWithoutComponentInput>;

    @Field(() => ComponentParameterCreateManyComponentInputEnvelope, {nullable:true})
    createMany?: ComponentParameterCreateManyComponentInputEnvelope;

    @Field(() => [ComponentParameterWhereUniqueInput], {nullable:true})
    set?: Array<ComponentParameterWhereUniqueInput>;

    @Field(() => [ComponentParameterWhereUniqueInput], {nullable:true})
    disconnect?: Array<ComponentParameterWhereUniqueInput>;

    @Field(() => [ComponentParameterWhereUniqueInput], {nullable:true})
    delete?: Array<ComponentParameterWhereUniqueInput>;

    @Field(() => [ComponentParameterWhereUniqueInput], {nullable:true})
    connect?: Array<ComponentParameterWhereUniqueInput>;

    @Field(() => [ComponentParameterUpdateWithWhereUniqueWithoutComponentInput], {nullable:true})
    update?: Array<ComponentParameterUpdateWithWhereUniqueWithoutComponentInput>;

    @Field(() => [ComponentParameterUpdateManyWithWhereWithoutComponentInput], {nullable:true})
    updateMany?: Array<ComponentParameterUpdateManyWithWhereWithoutComponentInput>;

    @Field(() => [ComponentParameterScalarWhereInput], {nullable:true})
    deleteMany?: Array<ComponentParameterScalarWhereInput>;
}
