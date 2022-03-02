import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentOverviewCreateManyComponentInput } from './component-overview-create-many-component.input';

@InputType()
export class ComponentOverviewCreateManyComponentInputEnvelope {

    @Field(() => [ComponentOverviewCreateManyComponentInput], {nullable:false})
    data!: Array<ComponentOverviewCreateManyComponentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
