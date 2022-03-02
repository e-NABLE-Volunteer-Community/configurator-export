import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceExtraCreateManyInput } from './device-extra-create-many.input';

@ArgsType()
export class CreateManyDeviceExtraArgs {

    @Field(() => [DeviceExtraCreateManyInput], {nullable:false})
    data!: Array<DeviceExtraCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
