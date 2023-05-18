import express from 'express'
import { graphqlHTTP } from "express-graphql"
import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList, GraphQLInt
} from 'graphql'
import {authors, books} from "./mockData.js";
import {BookType, AuthorType} from './Types.js'

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
        authors:{
            type: new GraphQLList(AuthorType),
            description: 'List of all authors',
            resolve: () => authors
        },
    })
});


const schema = new GraphQLSchema({
    query: RootQueryType
});


//How to query in the browser for the below thing
// {
//     message
// }

//Define Schema
//Previous Example
// const schema = new GraphQLSchema({
//     query: new GraphQLObjectType({
//         name:'HelloWorld',
//         fields: () => ({
//             message: {
//                 type: GraphQLString,
//                 resolve: () => 'Hello World'
//             }
//         })
//     })
// });

//Register serving route
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

// Run Server
app.listen(PORT, () => {
    console.log(`Server running on: ${PORT}`);
});