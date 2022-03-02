import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComponentOverviewCreateManyInput } from './component-overview-create-many.input';

@ArgsType()
export class CreateManyComponentOverviewArgs {

    @Field(() => [ComponentOverviewCreateManyInput], {nullable:false})
    data!: Array<ComponentOverviewCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
