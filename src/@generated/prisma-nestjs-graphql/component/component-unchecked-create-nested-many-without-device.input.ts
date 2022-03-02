import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentCreateWithoutDeviceInput } from './component-create-without-device.input';
import { ComponentCreateOrConnectWithoutDeviceInput } from './component-create-or-connect-without-device.input';
import { ComponentCreateManyDeviceInputEnvelope } from './component-create-many-device-input-envelope.input';
import { ComponentWhereUniqueInput } from './component-where-unique.input';

@InputType()
export class ComponentUncheckedCreateNestedManyWithoutDeviceInput {

    @Field(() => [ComponentCreateWithoutDeviceInput], {nullable:true})
    create?: Array<ComponentCreateWithoutDeviceInput>;

    @Field(() => [ComponentCreateOrConnectWithoutDeviceInput], {nullable:true})
    connectOrCreate?: Array<ComponentCreateOrConnectWithoutDeviceInput>;

    @Field(() => ComponentCreateManyDeviceInputEnvelope, {nullable:true})
    createMany?: ComponentCreateManyDeviceInputEnvelope;

    @Field(() => [ComponentWhereUniqueInput], {nullable:true})
    connect?: Array<ComponentWhereUniqueInput>;
}
