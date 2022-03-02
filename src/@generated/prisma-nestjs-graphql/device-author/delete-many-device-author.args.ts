import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceAuthorWhereInput } from './device-author-where.input';

@ArgsType()
export class DeleteManyDeviceAuthorArgs {

    @Field(() => DeviceAuthorWhereInput, {nullable:true})
    where?: DeviceAuthorWhereInput;
}
