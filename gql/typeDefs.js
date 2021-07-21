const { gql } = require("apollo-server-express");
const typeDefs = gql`
    type User {
        id: Int!
        name: String!
        email: String!
        password: String!
        book(limit: Int! = 0): [Book]
    }
    type Book {
        id: Int!
        title: String!
        descreption: String!
        author: String!
        user: User!
    }
    type Query {
        user(id: Int!): [User]!
        allBooks: [Book]!
        book(id: Int!): [Book]!
    }
    type Mutation {
        createUser(name: String!, email: String!, password: String!): User!
        createBook(
            UserId: Int!
            title: String!
            descreption: String!
            author: String!
        ): Book!
    }
`;
module.exports = typeDefs;
