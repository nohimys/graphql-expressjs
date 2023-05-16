import express from 'express'
import { graphqlHTTP } from "express-graphql"

const PORT = 5001;

const app = express();

//Register serving route
app.use('/graphql', graphqlHTTP({
    graphiql: true
}));

// Run Server
app.listen(PORT, () => {
    console.log(`Server running on: ${PORT}`);
});