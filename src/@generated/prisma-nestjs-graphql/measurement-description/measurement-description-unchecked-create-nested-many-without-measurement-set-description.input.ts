import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementDescriptionCreateWithoutMeasurementSetDescriptionInput } from './measurement-description-create-without-measurement-set-description.input';
import { MeasurementDescriptionCreateOrConnectWithoutMeasurementSetDescriptionInput } from './measurement-description-create-or-connect-without-measurement-set-description.input';
import { MeasurementDescriptionCreateManyMeasurementSetDescriptionInputEnvelope } from './measurement-description-create-many-measurement-set-description-input-envelope.input';
import { MeasurementDescriptionWhereUniqueInput } from './measurement-description-where-unique.input';

@InputType()
export class MeasurementDescriptionUncheckedCreateNestedManyWithoutMeasurementSetDescriptionInput {

    @Field(() => [MeasurementDescriptionCreateWithoutMeasurementSetDescriptionInput], {nullable:true})
    create?: Array<MeasurementDescriptionCreateWithoutMeasurementSetDescriptionInput>;

    @Field(() => [MeasurementDescriptionCreateOrConnectWithoutMeasurementSetDescriptionInput], {nullable:true})
    connectOrCreate?: Array<MeasurementDescriptionCreateOrConnectWithoutMeasurementSetDescriptionInput>;

    @Field(() => MeasurementDescriptionCreateManyMeasurementSetDescriptionInputEnvelope, {nullable:true})
    createMany?: MeasurementDescriptionCreateManyMeasurementSetDescriptionInputEnvelope;

    @Field(() => [MeasurementDescriptionWhereUniqueInput], {nullable:true})
    connect?: Array<MeasurementDescriptionWhereUniqueInput>;
}
