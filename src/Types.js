import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull
} from "graphql";
import {authors} from "./mockData.js";

export const BookType = new GraphQLObjectType({
    name: 'BookType',
    description: 'This represents a book written by an author.',
    fields: () => ({
        id: {type: GraphQLNonNull(GraphQLInt)},
        name: {type: GraphQLNonNull(GraphQLString)},
        authorId: {type: GraphQLInt},
        author: {
            type: AuthorType,
            resolve: (book) => {
                return authors.find((author) => {
                    return author.id === book.authorId
                });
            }
        },
    })
});

export const AuthorType = new GraphQLObjectType({
    name: 'AuthorType',
    description: 'Author Details',
    fields: () => ({
        id: {type: GraphQLNonNull(GraphQLInt)},
        name: {type: GraphQLNonNull(GraphQLString)},
    })
});