const pedidoService = require('../../../services/PedidosCadastroService');

module.exports = {
  Query: {
    pedido: async (_, { id }) => pedidoService.pedido(id),
    pedidos: async () => pedidoService.pedidos(),
  },

  Mutation: {
    criaPedido: async (_, { data, produtos }) => pedidoService.criaPedido(data, produtos),

    atualizaPedido: async (_, { id, data }) => pedidoService.atualizaPedido(id, data),

    deletaPedido: async (_, { id }) => pedidoService.deletaPedido(id),
  },
};