const produtosService = require('../../../services/ProdutosCadastroService');

module.exports = {
  Query: {
    produto: async (_, { id }) => produtosService.produto(id),
    produtos: async() => produtosService.produtos(),
  },

  Mutation: {
    criaProduto: async (_, { data }) => produtosService.criaProduto(data),

    atualizaProduto: async (_, { id, data }) => produtosService.atualizaProduto(id, data),

    deletaProduto: async (_, { id }) => produtosService.deletaProduto(id),
  },
};