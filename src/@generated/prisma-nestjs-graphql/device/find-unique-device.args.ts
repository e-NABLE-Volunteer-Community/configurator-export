import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceWhereUniqueInput } from './device-where-unique.input';

@ArgsType()
export class FindUniqueDeviceArgs {

    @Field(() => DeviceWhereUniqueInput, {nullable:false})
    where!: DeviceWhereUniqueInput;
}
