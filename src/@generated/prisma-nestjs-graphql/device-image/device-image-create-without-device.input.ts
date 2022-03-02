import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DeviceImageCreateWithoutDeviceInput {

    @Field(() => String, {nullable:false})
    image!: string;

    @Field(() => String, {nullable:true})
    locale?: string;
}
