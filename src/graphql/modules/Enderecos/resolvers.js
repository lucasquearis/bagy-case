const enderecosService = require('../../../services/EnderecosCadastroService');

module.exports = {
  Query: {
    endereco: async (_, { id }) => enderecosService.endereco(id),
    enderecos: async () => enderecosService.enderecos(),
  },

  Mutation: {
    criaEndereco: async (_, { data }) => enderecosService.criaEndereco(data),

    atualizaEndereco: async (_, { id, data }) => enderecosService.atualizaEndereco(id, data),

    deletaEndereco: async (_, { id }) => enderecosService.deletaEndereco(id),
  },
};
