import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MeasurementDescriptionKind } from '../prisma/measurement-description-kind.enum';

@InputType()
export class MeasurementDescriptionCreateManyMeasurementSetDescriptionInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => MeasurementDescriptionKind, {nullable:false})
    kind!: keyof typeof MeasurementDescriptionKind;
}
