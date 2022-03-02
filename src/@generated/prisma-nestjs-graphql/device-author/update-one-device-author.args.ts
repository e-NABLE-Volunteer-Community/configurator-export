import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceAuthorUpdateInput } from './device-author-update.input';
import { DeviceAuthorWhereUniqueInput } from './device-author-where-unique.input';

@ArgsType()
export class UpdateOneDeviceAuthorArgs {

    @Field(() => DeviceAuthorUpdateInput, {nullable:false})
    data!: DeviceAuthorUpdateInput;

    @Field(() => DeviceAuthorWhereUniqueInput, {nullable:false})
    where!: DeviceAuthorWhereUniqueInput;
}
