const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const models = require("./models");
require("dotenv").config();
// const {
//     ApolloServerPluginLandingPageGraphQLPlayground,
//     ApolloServerPluginLandingPageDisabled,
// } = require("apollo-server-core");
const { typeDefs, resolvers } = require("./gql");

// async function startApolloServer() {
//     const server = new ApolloServer({
//         typeDefs,
//         resolvers,
//         context: { models },
//     });
//     await server.start();
//     const app = express();
//     server.applyMiddleware({ app, path: "/api" });
//     await new Promise((resolve) =>
//         app.listen({ port: process.env.NODE_PORT }, resolve),
//     );
//     console.log(
//         `🚀 Server starting http://localhost:${
//             process.env.NODE_PORT + server.graphqlPath
//         }`,
//     );
//     return { server, app };
// }
// startApolloServer();
(async function () {
    const port = process.env.NODE_PORT;
    const path = "/graphql";
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: { models },
    });
    await server.start();
    const app = express();
    server.applyMiddleware({ app, path });
    await new Promise((resolve) => app.listen({ port }, resolve));
    console.log(
        `🚀 Server run at http://localhost:${port + server.graphqlPath}`,
    );
    return { server, app };
})();
