import { registerEnumType } from '@nestjs/graphql';

export enum AuthorUrlScalarFieldEnum {
    id = "id",
    authorId = "authorId",
    url = "url"
}


registerEnumType(AuthorUrlScalarFieldEnum, { name: 'AuthorUrlScalarFieldEnum', description: undefined })
