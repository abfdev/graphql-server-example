const { gql } = require("apollo-server-express");
const typeDefs = gql`
    type Article {
        id: ID
        articleTitle: String
        articleSlug: String
        articleContent: String
        createdAt: String
        updatedAt: String
    }
    type Query {
        getArticle(id: Int!, articleSlug: String!): Article
    }
`;
module.exports.typeDefs = typeDefs;
