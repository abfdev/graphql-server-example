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
    input ArticleInput {
        articleTitle: String
        articleSlug: String
        articleContent: String
    }
    type Query {
        getArticle(id: Int!, articleSlug: String!): Article
        getAllArticles: [Article]!
    }
    type Mutation {
        createArticle(input: ArticleInput): Article!
        updateArticle(id: Int!, input: ArticleInput): Article!
    }
`;
module.exports = typeDefs;
