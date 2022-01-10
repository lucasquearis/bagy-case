const { ApolloServer, gql } = require('apollo-server');

const produtos = [
  {
  id: 1,
  nome: 'Notebook',
  valor: 12000.99
  },
  {
  id: 2,
  nome: 'TV 32',
  valor: 400.00,
  },
];

const usuarios = [
  {
    id: 1,
    nome: 'Lucas',
    salario: 1234.54,
    ativo: true,
    idade: 25
  },
  {
    id: 2,
    nome: 'Diego',
    salario: 1231.21,
    ativo: true,
    idade: 23
  }
]

const typeDefs = gql`

  type Produto {
    id: ID,
    nome: String,
    valor: Float,
  }

  type Usuario {
    idade: Int,
    salario: Float,
    nome: String,
    ativo: Boolean,
    id: ID,
  },
  type Query {
    usuarios: [Usuario],
    produtos: [Produto],
    usuario(id: Int): Usuario
  },
`;
const resolvers = {
  Query: {
    usuarios() {
      return usuarios;
    },
    usuario(_, args) {
      console.log(args)
      const filteredUser = usuarios.find(({id}) => id === args.id);
      console.log(filteredUser);
      return filteredUser
    },
    produtos() {
      return produtos;
    },
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen();