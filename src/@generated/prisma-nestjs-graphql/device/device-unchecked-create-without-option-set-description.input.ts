import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ComponentUncheckedCreateNestedManyWithoutDeviceInput } from '../component/component-unchecked-create-nested-many-without-device.input';
import { DeviceAuthorUncheckedCreateNestedManyWithoutDeviceInput } from '../device-author/device-author-unchecked-create-nested-many-without-device.input';
import { DeviceExtraUncheckedCreateNestedManyWithoutDeviceInput } from '../device-extra/device-extra-unchecked-create-nested-many-without-device.input';
import { DeviceImageUncheckedCreateNestedManyWithoutDeviceInput } from '../device-image/device-image-unchecked-create-nested-many-without-device.input';
import { DeviceOverviewUncheckedCreateNestedManyWithoutDeviceInput } from '../device-overview/device-overview-unchecked-create-nested-many-without-device.input';

@InputType()
export class DeviceUncheckedCreateWithoutOptionSetDescriptionInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    measurementSetDescriptionId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ComponentUncheckedCreateNestedManyWithoutDeviceInput, {nullable:true})
    components?: ComponentUncheckedCreateNestedManyWithoutDeviceInput;

    @Field(() => DeviceAuthorUncheckedCreateNestedManyWithoutDeviceInput, {nullable:true})
    deviceAuthors?: DeviceAuthorUncheckedCreateNestedManyWithoutDeviceInput;

    @Field(() => DeviceExtraUncheckedCreateNestedManyWithoutDeviceInput, {nullable:true})
    deviceExtras?: DeviceExtraUncheckedCreateNestedManyWithoutDeviceInput;

    @Field(() => DeviceImageUncheckedCreateNestedManyWithoutDeviceInput, {nullable:true})
    deviceImages?: DeviceImageUncheckedCreateNestedManyWithoutDeviceInput;

    @Field(() => DeviceOverviewUncheckedCreateNestedManyWithoutDeviceInput, {nullable:true})
    deviceOverviews?: DeviceOverviewUncheckedCreateNestedManyWithoutDeviceInput;
}
