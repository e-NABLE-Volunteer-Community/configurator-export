import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceImageCreateInput } from './device-image-create.input';

@ArgsType()
export class CreateOneDeviceImageArgs {

    @Field(() => DeviceImageCreateInput, {nullable:false})
    data!: DeviceImageCreateInput;
}
