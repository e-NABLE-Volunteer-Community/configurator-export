import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceAuthorWhereUniqueInput } from './device-author-where-unique.input';

@ArgsType()
export class DeleteOneDeviceAuthorArgs {

    @Field(() => DeviceAuthorWhereUniqueInput, {nullable:false})
    where!: DeviceAuthorWhereUniqueInput;
}
