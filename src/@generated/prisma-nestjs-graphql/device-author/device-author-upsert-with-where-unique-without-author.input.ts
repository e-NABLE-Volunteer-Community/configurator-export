import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceAuthorWhereUniqueInput } from './device-author-where-unique.input';
import { DeviceAuthorUpdateWithoutAuthorInput } from './device-author-update-without-author.input';
import { DeviceAuthorCreateWithoutAuthorInput } from './device-author-create-without-author.input';

@InputType()
export class DeviceAuthorUpsertWithWhereUniqueWithoutAuthorInput {

    @Field(() => DeviceAuthorWhereUniqueInput, {nullable:false})
    where!: DeviceAuthorWhereUniqueInput;

    @Field(() => DeviceAuthorUpdateWithoutAuthorInput, {nullable:false})
    update!: DeviceAuthorUpdateWithoutAuthorInput;

    @Field(() => DeviceAuthorCreateWithoutAuthorInput, {nullable:false})
    create!: DeviceAuthorCreateWithoutAuthorInput;
}
