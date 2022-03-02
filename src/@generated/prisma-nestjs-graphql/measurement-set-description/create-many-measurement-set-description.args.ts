import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasurementSetDescriptionCreateManyInput } from './measurement-set-description-create-many.input';

@ArgsType()
export class CreateManyMeasurementSetDescriptionArgs {

    @Field(() => [MeasurementSetDescriptionCreateManyInput], {nullable:false})
    data!: Array<MeasurementSetDescriptionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
