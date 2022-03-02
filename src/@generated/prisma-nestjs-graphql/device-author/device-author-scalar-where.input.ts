import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class DeviceAuthorScalarWhereInput {

    @Field(() => [DeviceAuthorScalarWhereInput], {nullable:true})
    AND?: Array<DeviceAuthorScalarWhereInput>;

    @Field(() => [DeviceAuthorScalarWhereInput], {nullable:true})
    OR?: Array<DeviceAuthorScalarWhereInput>;

    @Field(() => [DeviceAuthorScalarWhereInput], {nullable:true})
    NOT?: Array<DeviceAuthorScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    deviceId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    authorId?: IntFilter;
}
