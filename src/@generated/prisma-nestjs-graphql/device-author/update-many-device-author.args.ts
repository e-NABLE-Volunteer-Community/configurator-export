import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceAuthorUncheckedUpdateManyInput } from './device-author-unchecked-update-many.input';
import { DeviceAuthorWhereInput } from './device-author-where.input';

@ArgsType()
export class UpdateManyDeviceAuthorArgs {

    @Field(() => DeviceAuthorUncheckedUpdateManyInput, {nullable:false})
    data!: DeviceAuthorUncheckedUpdateManyInput;

    @Field(() => DeviceAuthorWhereInput, {nullable:true})
    where?: DeviceAuthorWhereInput;
}
