const path = require("path");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { mergeTypeDefs, mergeResolvers } = require("@graphql-tools/merge");
const typesArray = loadFilesSync(path.join(__dirname, "./typeDefs"), {
    extensions: ["gql"],
});
const resolversArray = loadFilesSync(path.join(__dirname, "./resolvers"));
module.exports.typeDefs = mergeTypeDefs(typesArray);
module.exports.resolvers = mergeResolvers(resolversArray);
