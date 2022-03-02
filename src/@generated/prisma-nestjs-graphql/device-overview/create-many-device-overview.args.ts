import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceOverviewCreateManyInput } from './device-overview-create-many.input';

@ArgsType()
export class CreateManyDeviceOverviewArgs {

    @Field(() => [DeviceOverviewCreateManyInput], {nullable:false})
    data!: Array<DeviceOverviewCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
