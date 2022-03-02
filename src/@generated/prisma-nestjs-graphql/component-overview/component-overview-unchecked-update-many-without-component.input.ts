import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentOverviewCreateWithoutComponentInput } from './component-overview-create-without-component.input';
import { ComponentOverviewCreateOrConnectWithoutComponentInput } from './component-overview-create-or-connect-without-component.input';
import { ComponentOverviewUpsertWithWhereUniqueWithoutComponentInput } from './component-overview-upsert-with-where-unique-without-component.input';
import { ComponentOverviewCreateManyComponentInputEnvelope } from './component-overview-create-many-component-input-envelope.input';
import { ComponentOverviewWhereUniqueInput } from './component-overview-where-unique.input';
import { ComponentOverviewUpdateWithWhereUniqueWithoutComponentInput } from './component-overview-update-with-where-unique-without-component.input';
import { ComponentOverviewUpdateManyWithWhereWithoutComponentInput } from './component-overview-update-many-with-where-without-component.input';
import { ComponentOverviewScalarWhereInput } from './component-overview-scalar-where.input';

@InputType()
export class ComponentOverviewUncheckedUpdateManyWithoutComponentInput {

    @Field(() => [ComponentOverviewCreateWithoutComponentInput], {nullable:true})
    create?: Array<ComponentOverviewCreateWithoutComponentInput>;

    @Field(() => [ComponentOverviewCreateOrConnectWithoutComponentInput], {nullable:true})
    connectOrCreate?: Array<ComponentOverviewCreateOrConnectWithoutComponentInput>;

    @Field(() => [ComponentOverviewUpsertWithWhereUniqueWithoutComponentInput], {nullable:true})
    upsert?: Array<ComponentOverviewUpsertWithWhereUniqueWithoutComponentInput>;

    @Field(() => ComponentOverviewCreateManyComponentInputEnvelope, {nullable:true})
    createMany?: ComponentOverviewCreateManyComponentInputEnvelope;

    @Field(() => [ComponentOverviewWhereUniqueInput], {nullable:true})
    set?: Array<ComponentOverviewWhereUniqueInput>;

    @Field(() => [ComponentOverviewWhereUniqueInput], {nullable:true})
    disconnect?: Array<ComponentOverviewWhereUniqueInput>;

    @Field(() => [ComponentOverviewWhereUniqueInput], {nullable:true})
    delete?: Array<ComponentOverviewWhereUniqueInput>;

    @Field(() => [ComponentOverviewWhereUniqueInput], {nullable:true})
    connect?: Array<ComponentOverviewWhereUniqueInput>;

    @Field(() => [ComponentOverviewUpdateWithWhereUniqueWithoutComponentInput], {nullable:true})
    update?: Array<ComponentOverviewUpdateWithWhereUniqueWithoutComponentInput>;

    @Field(() => [ComponentOverviewUpdateManyWithWhereWithoutComponentInput], {nullable:true})
    updateMany?: Array<ComponentOverviewUpdateManyWithWhereWithoutComponentInput>;

    @Field(() => [ComponentOverviewScalarWhereInput], {nullable:true})
    deleteMany?: Array<ComponentOverviewScalarWhereInput>;
}
