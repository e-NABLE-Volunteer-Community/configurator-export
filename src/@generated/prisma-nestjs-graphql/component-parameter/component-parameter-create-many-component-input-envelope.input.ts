import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterCreateManyComponentInput } from './component-parameter-create-many-component.input';

@InputType()
export class ComponentParameterCreateManyComponentInputEnvelope {

    @Field(() => [ComponentParameterCreateManyComponentInput], {nullable:false})
    data!: Array<ComponentParameterCreateManyComponentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
