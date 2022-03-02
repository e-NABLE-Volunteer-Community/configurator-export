import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceCreateWithoutComponentsInput } from './device-create-without-components.input';
import { DeviceCreateOrConnectWithoutComponentsInput } from './device-create-or-connect-without-components.input';
import { DeviceUpsertWithoutComponentsInput } from './device-upsert-without-components.input';
import { DeviceWhereUniqueInput } from './device-where-unique.input';
import { DeviceUpdateWithoutComponentsInput } from './device-update-without-components.input';

@InputType()
export class DeviceUpdateOneRequiredWithoutComponentsInput {

    @Field(() => DeviceCreateWithoutComponentsInput, {nullable:true})
    create?: DeviceCreateWithoutComponentsInput;

    @Field(() => DeviceCreateOrConnectWithoutComponentsInput, {nullable:true})
    connectOrCreate?: DeviceCreateOrConnectWithoutComponentsInput;

    @Field(() => DeviceUpsertWithoutComponentsInput, {nullable:true})
    upsert?: DeviceUpsertWithoutComponentsInput;

    @Field(() => DeviceWhereUniqueInput, {nullable:true})
    connect?: DeviceWhereUniqueInput;

    @Field(() => DeviceUpdateWithoutComponentsInput, {nullable:true})
    update?: DeviceUpdateWithoutComponentsInput;
}
