import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceWhereInput } from './device-where.input';

@ArgsType()
export class DeleteManyDeviceArgs {

    @Field(() => DeviceWhereInput, {nullable:true})
    where?: DeviceWhereInput;
}
