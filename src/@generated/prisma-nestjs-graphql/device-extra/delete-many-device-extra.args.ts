import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceExtraWhereInput } from './device-extra-where.input';

@ArgsType()
export class DeleteManyDeviceExtraArgs {

    @Field(() => DeviceExtraWhereInput, {nullable:true})
    where?: DeviceExtraWhereInput;
}
