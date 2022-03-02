import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MeasurementDescriptionKind } from '../prisma/measurement-description-kind.enum';

@InputType()
export class MeasurementDescriptionUncheckedCreateWithoutOverviewsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    measurementSetDescriptionId!: number;

    @Field(() => MeasurementDescriptionKind, {nullable:false})
    kind!: keyof typeof MeasurementDescriptionKind;
}
