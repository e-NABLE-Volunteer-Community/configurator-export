import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentWhereUniqueInput } from './component-where-unique.input';
import { ComponentUpdateWithoutDeviceInput } from './component-update-without-device.input';

@InputType()
export class ComponentUpdateWithWhereUniqueWithoutDeviceInput {

    @Field(() => ComponentWhereUniqueInput, {nullable:false})
    where!: ComponentWhereUniqueInput;

    @Field(() => ComponentUpdateWithoutDeviceInput, {nullable:false})
    data!: ComponentUpdateWithoutDeviceInput;
}
