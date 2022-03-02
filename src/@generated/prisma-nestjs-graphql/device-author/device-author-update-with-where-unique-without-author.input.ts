import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceAuthorWhereUniqueInput } from './device-author-where-unique.input';
import { DeviceAuthorUpdateWithoutAuthorInput } from './device-author-update-without-author.input';

@InputType()
export class DeviceAuthorUpdateWithWhereUniqueWithoutAuthorInput {

    @Field(() => DeviceAuthorWhereUniqueInput, {nullable:false})
    where!: DeviceAuthorWhereUniqueInput;

    @Field(() => DeviceAuthorUpdateWithoutAuthorInput, {nullable:false})
    data!: DeviceAuthorUpdateWithoutAuthorInput;
}
