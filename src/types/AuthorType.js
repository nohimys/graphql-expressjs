import {GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";
import {books} from "../mockData.js";
import {BookType} from "./BookType.js";

export const AuthorType = new GraphQLObjectType({
    name: 'AuthorType',
    description: 'Author Details',
    fields: () => ({
        id: {type: GraphQLNonNull(GraphQLInt)},
        name: {type: GraphQLNonNull(GraphQLString)},
        books: {
            type: GraphQLNonNull(GraphQLList(BookType)),
            resolve: (author) => {
                return books.filter((book) => {
                    return author.id === book.authorId;
                });
            }
        }
    })
});