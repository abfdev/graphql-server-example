const express = require("express");
const { ApolloServer } = require("apollo-server-express");
require("dotenv").config();
const { typeDefs, resolvers } = require("./gql");
const models = require("./models");
const port = process.env.NODE_PORT;
const path = "/graphql";
// const {
//     ApolloServerPluginLandingPageGraphQLPlayground,
//     ApolloServerPluginLandingPageDisabled,
// } = require("apollo-server-core");

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
// (async function () {
//     const port = process.env.NODE_PORT;
//     const path = "/graphql";
//     const server = new ApolloServer({
//         typeDefs,
//         resolvers,
//         context: { models },
//     });
//     await server.start();
//     const app = express();
//     server.applyMiddleware({ app, path });
//     await new Promise((resolve) => app.listen({ port }, resolve));
//     console.log(
//         `🚀 Server run at http://localhost:${port + server.graphqlPath}`,
//     );
//     return { server, app };
// })();
var { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("graphql-tools");
const app = express();
const schema = makeExecutableSchema({ typeDefs, resolvers });
app.use(path, graphqlHTTP({ schema, graphiql: true, context: { models } }));
app.listen(port);
console.log(`Running a GraphQL API server at http://localhost:${port + path}`);
