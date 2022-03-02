import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentCreateWithoutDeviceInput } from './component-create-without-device.input';
import { ComponentCreateOrConnectWithoutDeviceInput } from './component-create-or-connect-without-device.input';
import { ComponentUpsertWithWhereUniqueWithoutDeviceInput } from './component-upsert-with-where-unique-without-device.input';
import { ComponentCreateManyDeviceInputEnvelope } from './component-create-many-device-input-envelope.input';
import { ComponentWhereUniqueInput } from './component-where-unique.input';
import { ComponentUpdateWithWhereUniqueWithoutDeviceInput } from './component-update-with-where-unique-without-device.input';
import { ComponentUpdateManyWithWhereWithoutDeviceInput } from './component-update-many-with-where-without-device.input';
import { ComponentScalarWhereInput } from './component-scalar-where.input';

@InputType()
export class ComponentUncheckedUpdateManyWithoutDeviceInput {

    @Field(() => [ComponentCreateWithoutDeviceInput], {nullable:true})
    create?: Array<ComponentCreateWithoutDeviceInput>;

    @Field(() => [ComponentCreateOrConnectWithoutDeviceInput], {nullable:true})
    connectOrCreate?: Array<ComponentCreateOrConnectWithoutDeviceInput>;

    @Field(() => [ComponentUpsertWithWhereUniqueWithoutDeviceInput], {nullable:true})
    upsert?: Array<ComponentUpsertWithWhereUniqueWithoutDeviceInput>;

    @Field(() => ComponentCreateManyDeviceInputEnvelope, {nullable:true})
    createMany?: ComponentCreateManyDeviceInputEnvelope;

    @Field(() => [ComponentWhereUniqueInput], {nullable:true})
    set?: Array<ComponentWhereUniqueInput>;

    @Field(() => [ComponentWhereUniqueInput], {nullable:true})
    disconnect?: Array<ComponentWhereUniqueInput>;

    @Field(() => [ComponentWhereUniqueInput], {nullable:true})
    delete?: Array<ComponentWhereUniqueInput>;

    @Field(() => [ComponentWhereUniqueInput], {nullable:true})
    connect?: Array<ComponentWhereUniqueInput>;

    @Field(() => [ComponentUpdateWithWhereUniqueWithoutDeviceInput], {nullable:true})
    update?: Array<ComponentUpdateWithWhereUniqueWithoutDeviceInput>;

    @Field(() => [ComponentUpdateManyWithWhereWithoutDeviceInput], {nullable:true})
    updateMany?: Array<ComponentUpdateManyWithWhereWithoutDeviceInput>;

    @Field(() => [ComponentScalarWhereInput], {nullable:true})
    deleteMany?: Array<ComponentScalarWhereInput>;
}
