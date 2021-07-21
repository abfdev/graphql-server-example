const { gql } = require("apollo-server-express");
const typeDefs = gql`
    type OneProduct {
        id: ID
        title: String
        price: Float
        description: String
        category: String
        image: String
    }
    type Query {
        oneProduct(id: ID!): [OneProduct]
        allProducts(limit: Int = 0, sort: String = "asc"): [OneProduct]
    }
`;
module.exports = typeDefs;
