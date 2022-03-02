import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceImageWhereUniqueInput } from './device-image-where-unique.input';

@ArgsType()
export class FindUniqueDeviceImageArgs {

    @Field(() => DeviceImageWhereUniqueInput, {nullable:false})
    where!: DeviceImageWhereUniqueInput;
}
