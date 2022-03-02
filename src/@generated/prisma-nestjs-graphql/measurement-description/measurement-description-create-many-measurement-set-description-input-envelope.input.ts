import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementDescriptionCreateManyMeasurementSetDescriptionInput } from './measurement-description-create-many-measurement-set-description.input';

@InputType()
export class MeasurementDescriptionCreateManyMeasurementSetDescriptionInputEnvelope {

    @Field(() => [MeasurementDescriptionCreateManyMeasurementSetDescriptionInput], {nullable:false})
    data!: Array<MeasurementDescriptionCreateManyMeasurementSetDescriptionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
