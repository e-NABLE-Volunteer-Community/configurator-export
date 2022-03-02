import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasurementDescriptionCreateManyInput } from './measurement-description-create-many.input';

@ArgsType()
export class CreateManyMeasurementDescriptionArgs {

    @Field(() => [MeasurementDescriptionCreateManyInput], {nullable:false})
    data!: Array<MeasurementDescriptionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
