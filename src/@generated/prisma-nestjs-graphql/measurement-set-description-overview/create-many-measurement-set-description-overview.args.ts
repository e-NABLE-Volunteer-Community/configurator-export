import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasurementSetDescriptionOverviewCreateManyInput } from './measurement-set-description-overview-create-many.input';

@ArgsType()
export class CreateManyMeasurementSetDescriptionOverviewArgs {

    @Field(() => [MeasurementSetDescriptionOverviewCreateManyInput], {nullable:false})
    data!: Array<MeasurementSetDescriptionOverviewCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
