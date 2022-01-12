const { ApolloServer } = require('apollo-server');
const { resolvers, typeDefs } = require('./src/graphql')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: (err) => {
    if(err.message) {
      return err.message
    }
  }
});

server.listen().then(({ url }) => console.log(url));