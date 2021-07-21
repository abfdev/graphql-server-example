const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
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
        plugins: [
            //ApolloServerPluginLandingPageDisabled(),
            //ApolloServerPluginLandingPageGraphQLPlayground(),
            {
                async serverWillStart() {
                    return {
                        async renderLandingPage() {
                            const html = '{"message" : "Hello world!!"}';
                            return { html };
                        },
                    };
                },
            },
        ],
    });
    await server.start();

    const app = express();
    server.applyMiddleware({ app, path: "/api" });

    await new Promise((resolve) => app.listen({ port: 4000 }, resolve));
    console.log(
        `🚀 Server ready at http://localhost:4000${server.graphqlPath}`,
    );
    return { server, app };
}
startApolloServer();
