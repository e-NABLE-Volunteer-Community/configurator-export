import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceCreateInput } from './device-create.input';

@ArgsType()
export class CreateOneDeviceArgs {

    @Field(() => DeviceCreateInput, {nullable:false})
    data!: DeviceCreateInput;
}
