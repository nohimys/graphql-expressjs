# graphql-expressjs
This is a ExpressJS application serving GraphQL queries

## Sample Queries for Testing

### Sample Query 01
Get all books & their author details
```
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
```

### Sample Query 02
Get all authors & their books
```
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
```

### Sample Query 03
Get book by id
```
{
  book(id: 1) {
    name
    author {
      name
    }
  }
}
```

### Sample Query 04
Get author by id
```
{
  author(id: 1) {
    name
  }
}
```

### Sample Query 05
Get all books by author name
```
{
  author (name: "J. K. Rowling") {
    name
    books {
      name
      id
    }
  }
}
```