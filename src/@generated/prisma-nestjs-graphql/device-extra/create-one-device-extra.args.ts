import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceExtraCreateInput } from './device-extra-create.input';

@ArgsType()
export class CreateOneDeviceExtraArgs {

    @Field(() => DeviceExtraCreateInput, {nullable:false})
    data!: DeviceExtraCreateInput;
}
