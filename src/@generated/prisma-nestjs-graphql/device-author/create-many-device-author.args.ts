import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceAuthorCreateManyInput } from './device-author-create-many.input';

@ArgsType()
export class CreateManyDeviceAuthorArgs {

    @Field(() => [DeviceAuthorCreateManyInput], {nullable:false})
    data!: Array<DeviceAuthorCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
