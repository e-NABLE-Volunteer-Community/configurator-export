import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceImageWhereUniqueInput } from './device-image-where-unique.input';
import { DeviceImageCreateInput } from './device-image-create.input';
import { DeviceImageUpdateInput } from './device-image-update.input';

@ArgsType()
export class UpsertOneDeviceImageArgs {

    @Field(() => DeviceImageWhereUniqueInput, {nullable:false})
    where!: DeviceImageWhereUniqueInput;

    @Field(() => DeviceImageCreateInput, {nullable:false})
    create!: DeviceImageCreateInput;

    @Field(() => DeviceImageUpdateInput, {nullable:false})
    update!: DeviceImageUpdateInput;
}
