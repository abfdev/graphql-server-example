const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const models = require("./models");
require("dotenv").config();
const {
    ApolloServerPluginLandingPageGraphQLPlayground,
    ApolloServerPluginLandingPageDisabled,
} = require("apollo-server-core");
const typeDefs = require("./gql/typeDefs");
const resolvers = require("./gql/resolvers");

async function startApolloServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: { models },
        plugins: [
            //ApolloServerPluginLandingPageDisabled(),
            //ApolloServerPluginLandingPageGraphQLPlayground(),
            //     {
            //         async serverWillStart() {
            //             return {
            //                 async renderLandingPage() {
            //                     const html = '{"message" : "Hello world!!"}';
            //                     return { html };
            //                 },
            //             };
            //         },
            //     },
        ],
    });
    await server.start();
    const app = express();
    server.applyMiddleware({ app, path: "/api" });
    await new Promise((resolve) =>
        app.listen({ port: process.env.NODE_PORT }, resolve),
    );
    console.log(
        `🚀 Server starting at http://localhost:${
            process.env.NODE_PORT + server.graphqlPath
        }`,
    );
    return { server, app };
}
startApolloServer();
