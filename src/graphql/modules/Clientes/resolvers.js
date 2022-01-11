let clientes = require('../../../mock/clientes');

const db = require('../../../db');

module.exports = {
  Query: {
    cliente: (_, args) => clientes.find((cliente) => cliente.id === args.id),
    clientes: async () =>  await db("clientes") ,
  },
  Mutation: {
    criarCliente: async (_, { data }) => {
      const [response] = await db("clientes").insert(data).returning("*");
      return response
    },

    atualizaCliente(_, {id, data}) {
      const cliente = clientes.find(u => u.id === id);
      const indice = clientes.findIndex(u => u.id === id);

      const novoCliente = {
        ...cliente,
        ...data,
      }

      clientes.splice(indice, 1, novoCliente);

      return novoCliente;
    },

    deletaCliente(_, { filtro: { id, cpf } }) {
      const condicao = id ? { id } : { cpf }
      return deletarCliente(condicao)
    }
  }
};

const deletarCliente = (filtro) => {
  const [chave] = Object.keys(filtro);
  const [valor] = Object.values(filtro);

  const clienteEncontrado = clientes.find(cliente => cliente[chave] === valor);
  const clientesFiltrados = clientes.filter(cliente => cliente[chave] !== valor)
  clientes = clientesFiltrados;

  return !!clienteEncontrado
}