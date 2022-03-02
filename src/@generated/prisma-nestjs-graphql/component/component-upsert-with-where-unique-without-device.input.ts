import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentWhereUniqueInput } from './component-where-unique.input';
import { ComponentUpdateWithoutDeviceInput } from './component-update-without-device.input';
import { ComponentCreateWithoutDeviceInput } from './component-create-without-device.input';

@InputType()
export class ComponentUpsertWithWhereUniqueWithoutDeviceInput {

    @Field(() => ComponentWhereUniqueInput, {nullable:false})
    where!: ComponentWhereUniqueInput;

    @Field(() => ComponentUpdateWithoutDeviceInput, {nullable:false})
    update!: ComponentUpdateWithoutDeviceInput;

    @Field(() => ComponentCreateWithoutDeviceInput, {nullable:false})
    create!: ComponentCreateWithoutDeviceInput;
}
