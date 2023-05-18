import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull
} from "graphql";

export const BookType = new GraphQLObjectType({
    name: 'BookType',
    description: 'This represents a book written by an author.',
    fields: () => ({
        id: {type: GraphQLNonNull(GraphQLInt)},
        name: {type: GraphQLNonNull(GraphQLString)},
        authorId: {type: GraphQLInt},
    })
});