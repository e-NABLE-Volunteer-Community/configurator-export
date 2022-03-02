import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasurementSetDescriptionUncheckedUpdateManyInput } from './measurement-set-description-unchecked-update-many.input';
import { MeasurementSetDescriptionWhereInput } from './measurement-set-description-where.input';

@ArgsType()
export class UpdateManyMeasurementSetDescriptionArgs {

    @Field(() => MeasurementSetDescriptionUncheckedUpdateManyInput, {nullable:false})
    data!: MeasurementSetDescriptionUncheckedUpdateManyInput;

    @Field(() => MeasurementSetDescriptionWhereInput, {nullable:true})
    where?: MeasurementSetDescriptionWhereInput;
}
