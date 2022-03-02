import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceCreateManyInput } from './device-create-many.input';

@ArgsType()
export class CreateManyDeviceArgs {

    @Field(() => [DeviceCreateManyInput], {nullable:false})
    data!: Array<DeviceCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
