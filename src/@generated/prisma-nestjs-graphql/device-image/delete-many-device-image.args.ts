import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceImageWhereInput } from './device-image-where.input';

@ArgsType()
export class DeleteManyDeviceImageArgs {

    @Field(() => DeviceImageWhereInput, {nullable:true})
    where?: DeviceImageWhereInput;
}
