import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceOverviewWhereUniqueInput } from './device-overview-where-unique.input';

@ArgsType()
export class FindUniqueDeviceOverviewArgs {

    @Field(() => DeviceOverviewWhereUniqueInput, {nullable:false})
    where!: DeviceOverviewWhereUniqueInput;
}
