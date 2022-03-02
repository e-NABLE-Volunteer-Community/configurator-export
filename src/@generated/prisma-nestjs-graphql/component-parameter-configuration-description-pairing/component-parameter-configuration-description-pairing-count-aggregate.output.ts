import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ComponentParameterConfigurationDescriptionPairingCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    componentParameterId!: number;

    @Field(() => Int, {nullable:false})
    configurationDescriptionId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
