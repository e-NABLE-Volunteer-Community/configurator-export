import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceAuthorWhereUniqueInput } from './device-author-where-unique.input';
import { DeviceAuthorCreateInput } from './device-author-create.input';
import { DeviceAuthorUpdateInput } from './device-author-update.input';

@ArgsType()
export class UpsertOneDeviceAuthorArgs {

    @Field(() => DeviceAuthorWhereUniqueInput, {nullable:false})
    where!: DeviceAuthorWhereUniqueInput;

    @Field(() => DeviceAuthorCreateInput, {nullable:false})
    create!: DeviceAuthorCreateInput;

    @Field(() => DeviceAuthorUpdateInput, {nullable:false})
    update!: DeviceAuthorUpdateInput;
}
