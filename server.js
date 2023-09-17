import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";

const server = new ApolloServer({
  typeDefs,
  // typeDefs,
  // resolvers,
});

const { url } = await startStandaloneServer(server);

console.log(`🚀 Server ready at ${url}`);
