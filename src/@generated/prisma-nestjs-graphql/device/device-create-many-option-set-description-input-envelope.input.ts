import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceCreateManyOptionSetDescriptionInput } from './device-create-many-option-set-description.input';

@InputType()
export class DeviceCreateManyOptionSetDescriptionInputEnvelope {

    @Field(() => [DeviceCreateManyOptionSetDescriptionInput], {nullable:false})
    data!: Array<DeviceCreateManyOptionSetDescriptionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
