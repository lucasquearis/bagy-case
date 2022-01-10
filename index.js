const { ApolloServer, gql } = require('apollo-server');
const { resolvers, typeDefs } = require('./src/graphql')

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => console.log(url));