import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ConfigurationDescriptionKind } from '../prisma/configuration-description-kind.enum';

@InputType()
export class ConfigurationDescriptionCreateManyConfigurationSetDescriptionInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => ConfigurationDescriptionKind, {nullable:false})
    kind!: keyof typeof ConfigurationDescriptionKind;
}
