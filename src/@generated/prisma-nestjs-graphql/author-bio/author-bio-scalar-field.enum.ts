import { registerEnumType } from '@nestjs/graphql';

export enum AuthorBioScalarFieldEnum {
    id = "id",
    authorId = "authorId",
    bio = "bio",
    locale = "locale"
}


registerEnumType(AuthorBioScalarFieldEnum, { name: 'AuthorBioScalarFieldEnum', description: undefined })
