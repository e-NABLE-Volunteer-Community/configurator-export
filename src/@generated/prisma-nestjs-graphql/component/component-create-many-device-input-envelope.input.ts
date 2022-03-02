import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentCreateManyDeviceInput } from './component-create-many-device.input';

@InputType()
export class ComponentCreateManyDeviceInputEnvelope {

    @Field(() => [ComponentCreateManyDeviceInput], {nullable:false})
    data!: Array<ComponentCreateManyDeviceInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
