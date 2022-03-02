import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceImageCreateManyInput } from './device-image-create-many.input';

@ArgsType()
export class CreateManyDeviceImageArgs {

    @Field(() => [DeviceImageCreateManyInput], {nullable:false})
    data!: Array<DeviceImageCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
