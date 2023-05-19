import express from 'express'
import { graphqlHTTP } from "express-graphql"
import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList, GraphQLInt, GraphQLString, GraphQLNonNull
} from 'graphql'
import {authors, books} from "./mockData.js";
import { AuthorType } from './types/AuthorType.js'
import { BookType } from './types/BookType.js'

const PORT = 5001;
const app = express();

const RootQueryType = new GraphQLObjectType({
    name:'Query',
    description: 'This is the Root Query',
    fields: () => ({
        book:{
            type: BookType,
            description: 'A single book',
            args: {
                id: {type: GraphQLInt}
            },
            resolve: (bookObject, args) => {
                return books.find(book => book.id === args.id);
            }
        },
        books:{
            type: new GraphQLList(BookType),
            description: 'List of all books',
            resolve: () => books
        },
        author:{
            type: AuthorType,
            description: 'A single Author',
            args: {
                id: {type: GraphQLInt},
                name: {type: GraphQLString},
            },
            resolve: (parentAuthorObject, args) => {
                if(args.id){
                    return authors.find(author => author.id === args.id);
                }
                return authors.find(author => author.name === args.name);
            }
        },
        authors:{
            type: new GraphQLList(AuthorType),
            description: 'List of all authors',
            resolve: () => authors
        },
    })
});

const RootMutationType = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Root Mutation for Update Operations',
    fields: () => ({
        addBook: {
            type: BookType,
            description: 'Create New Book',
            args: {
                name: {type: GraphQLNonNull(GraphQLString)},
                authorId: {type: GraphQLNonNull(GraphQLInt)},
            },
            resolve: (parent, args) => {
                const book = {
                    id: books.length + 1,
                    name: args.name,
                    authorId: args.authorId
                }
                books.push(book);
                return book;
            }
        }
    })
});


const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
});

//Register serving route
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

// Run Server
app.listen(PORT, () => {
    console.log(`Server running on: ${PORT}`);
});