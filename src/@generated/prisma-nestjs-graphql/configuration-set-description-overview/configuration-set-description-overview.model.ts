import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ConfigurationSetDescription } from '../configuration-set-description/configuration-set-description.model';

@ObjectType()
export class ConfigurationSetDescriptionOverview {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    configurationSetDescriptionId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    locale!: string;

    @Field(() => ConfigurationSetDescription, {nullable:false})
    configurationSetDescription?: ConfigurationSetDescription;
}
