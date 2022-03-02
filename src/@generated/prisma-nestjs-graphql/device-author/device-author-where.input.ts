import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DeviceRelationFilter } from '../device/device-relation-filter.input';
import { AuthorRelationFilter } from '../author/author-relation-filter.input';

@InputType()
export class DeviceAuthorWhereInput {

    @Field(() => [DeviceAuthorWhereInput], {nullable:true})
    AND?: Array<DeviceAuthorWhereInput>;

    @Field(() => [DeviceAuthorWhereInput], {nullable:true})
    OR?: Array<DeviceAuthorWhereInput>;

    @Field(() => [DeviceAuthorWhereInput], {nullable:true})
    NOT?: Array<DeviceAuthorWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    deviceId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    authorId?: IntFilter;

    @Field(() => DeviceRelationFilter, {nullable:true})
    device?: DeviceRelationFilter;

    @Field(() => AuthorRelationFilter, {nullable:true})
    author?: AuthorRelationFilter;
}
