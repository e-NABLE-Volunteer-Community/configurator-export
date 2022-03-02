import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceAuthorCreateInput } from './device-author-create.input';

@ArgsType()
export class CreateOneDeviceAuthorArgs {

    @Field(() => DeviceAuthorCreateInput, {nullable:false})
    data!: DeviceAuthorCreateInput;
}
