# graphql-expressjs
This is a ExpressJS application serving GraphQL queries

## Sample Queries for Testing

### Sample Query 01

{
books {
id
name
authorId
author {
name
}
}
}

### Sample Query 02

{
authors {
id
name
books {
name
id
}
}
}

### Sample Query 03

{
book (id: 1){
name,
author {
name
}
}
}

### Sample Query 04

{
author (id: 1) {
name
}
}