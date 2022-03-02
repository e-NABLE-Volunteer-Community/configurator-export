import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceExtraWhereUniqueInput } from './device-extra-where-unique.input';

@ArgsType()
export class DeleteOneDeviceExtraArgs {

    @Field(() => DeviceExtraWhereUniqueInput, {nullable:false})
    where!: DeviceExtraWhereUniqueInput;
}
