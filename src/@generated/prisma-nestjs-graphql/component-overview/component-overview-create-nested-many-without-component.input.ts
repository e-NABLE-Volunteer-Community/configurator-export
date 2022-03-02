import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentOverviewCreateWithoutComponentInput } from './component-overview-create-without-component.input';
import { ComponentOverviewCreateOrConnectWithoutComponentInput } from './component-overview-create-or-connect-without-component.input';
import { ComponentOverviewCreateManyComponentInputEnvelope } from './component-overview-create-many-component-input-envelope.input';
import { ComponentOverviewWhereUniqueInput } from './component-overview-where-unique.input';

@InputType()
export class ComponentOverviewCreateNestedManyWithoutComponentInput {

    @Field(() => [ComponentOverviewCreateWithoutComponentInput], {nullable:true})
    create?: Array<ComponentOverviewCreateWithoutComponentInput>;

    @Field(() => [ComponentOverviewCreateOrConnectWithoutComponentInput], {nullable:true})
    connectOrCreate?: Array<ComponentOverviewCreateOrConnectWithoutComponentInput>;

    @Field(() => ComponentOverviewCreateManyComponentInputEnvelope, {nullable:true})
    createMany?: ComponentOverviewCreateManyComponentInputEnvelope;

    @Field(() => [ComponentOverviewWhereUniqueInput], {nullable:true})
    connect?: Array<ComponentOverviewWhereUniqueInput>;
}
