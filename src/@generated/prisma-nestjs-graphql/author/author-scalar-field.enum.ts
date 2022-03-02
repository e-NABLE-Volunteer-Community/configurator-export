import { registerEnumType } from '@nestjs/graphql';

export enum AuthorScalarFieldEnum {
    id = "id",
    name = "name",
    image = "image",
    email = "email"
}


registerEnumType(AuthorScalarFieldEnum, { name: 'AuthorScalarFieldEnum', description: undefined })
