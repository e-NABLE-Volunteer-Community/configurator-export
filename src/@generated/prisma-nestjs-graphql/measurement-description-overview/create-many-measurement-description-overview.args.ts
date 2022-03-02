import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasurementDescriptionOverviewCreateManyInput } from './measurement-description-overview-create-many.input';

@ArgsType()
export class CreateManyMeasurementDescriptionOverviewArgs {

    @Field(() => [MeasurementDescriptionOverviewCreateManyInput], {nullable:false})
    data!: Array<MeasurementDescriptionOverviewCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
