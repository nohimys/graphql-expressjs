import express from 'express'
import { graphqlHTTP } from "express-graphql"
import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString
} from 'graphql'

const PORT = 5001;

const app = express();


//How to query in the browser for the below thing
// {
//     message
// }

//Define Schema
const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name:'HelloWorld',
        fields: () => ({
            message: {
                type: GraphQLString,
                resolve: () => 'Hello World'
            }
        })
    })
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