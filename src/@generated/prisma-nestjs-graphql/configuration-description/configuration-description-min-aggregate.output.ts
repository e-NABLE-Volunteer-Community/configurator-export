import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ConfigurationDescriptionKind } from '../prisma/configuration-description-kind.enum';

@ObjectType()
export class ConfigurationDescriptionMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    configurationSetDescriptionId?: number;

    @Field(() => ConfigurationDescriptionKind, {nullable:true})
    kind?: keyof typeof ConfigurationDescriptionKind;
}
