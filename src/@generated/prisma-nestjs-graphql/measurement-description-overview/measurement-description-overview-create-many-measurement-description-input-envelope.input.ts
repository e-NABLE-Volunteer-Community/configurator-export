import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementDescriptionOverviewCreateManyMeasurementDescriptionInput } from './measurement-description-overview-create-many-measurement-description.input';

@InputType()
export class MeasurementDescriptionOverviewCreateManyMeasurementDescriptionInputEnvelope {

    @Field(() => [MeasurementDescriptionOverviewCreateManyMeasurementDescriptionInput], {nullable:false})
    data!: Array<MeasurementDescriptionOverviewCreateManyMeasurementDescriptionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
