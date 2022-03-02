import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceCreateManyMeasurementSetDescriptionInput } from './device-create-many-measurement-set-description.input';

@InputType()
export class DeviceCreateManyMeasurementSetDescriptionInputEnvelope {

    @Field(() => [DeviceCreateManyMeasurementSetDescriptionInput], {nullable:false})
    data!: Array<DeviceCreateManyMeasurementSetDescriptionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
