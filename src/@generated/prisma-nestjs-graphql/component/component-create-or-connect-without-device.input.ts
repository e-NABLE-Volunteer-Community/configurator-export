import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentWhereUniqueInput } from './component-where-unique.input';
import { ComponentCreateWithoutDeviceInput } from './component-create-without-device.input';

@InputType()
export class ComponentCreateOrConnectWithoutDeviceInput {

    @Field(() => ComponentWhereUniqueInput, {nullable:false})
    where!: ComponentWhereUniqueInput;

    @Field(() => ComponentCreateWithoutDeviceInput, {nullable:false})
    create!: ComponentCreateWithoutDeviceInput;
}
