const clientesService = require('../../../services/ClientesCadastroService');

module.exports = {
  Query: {
    cliente: async (_, { id }) => clientesService.cliente(id),
    clientes: async () => clientesService.clientes(),
  },
  
  Mutation: {
    criaCliente: async (_, { data }) => clientesService.criaCliente(data),

    atualizaCliente: async (_, { id, data }) => clientesService.atualizaCliente(id, data),

    deletaCliente: async(_, { filtro }) => clientesService.deletaCliente(filtro),
  }
};
