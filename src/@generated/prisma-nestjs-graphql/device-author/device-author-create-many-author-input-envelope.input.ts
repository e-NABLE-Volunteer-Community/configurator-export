import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceAuthorCreateManyAuthorInput } from './device-author-create-many-author.input';

@InputType()
export class DeviceAuthorCreateManyAuthorInputEnvelope {

    @Field(() => [DeviceAuthorCreateManyAuthorInput], {nullable:false})
    data!: Array<DeviceAuthorCreateManyAuthorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
