import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ComponentParameterConfigurationDescriptionPairingMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    componentParameterId?: number;

    @Field(() => Int, {nullable:true})
    configurationDescriptionId?: number;
}
