import {GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";
import {authors} from "../mockData.js";
import {AuthorType} from "./AuthorType.js";

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