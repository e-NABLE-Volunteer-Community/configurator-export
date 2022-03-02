import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementSetDescriptionOverviewCreateManyMeasurementSetDescriptionInput } from './measurement-set-description-overview-create-many-measurement-set-description.input';

@InputType()
export class MeasurementSetDescriptionOverviewCreateManyMeasurementSetDescriptionInputEnvelope {

    @Field(() => [MeasurementSetDescriptionOverviewCreateManyMeasurementSetDescriptionInput], {nullable:false})
    data!: Array<MeasurementSetDescriptionOverviewCreateManyMeasurementSetDescriptionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
