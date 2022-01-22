const { pedido } = require('../mocks/pedido');

exports.seed = (knex) => knex('pedidos').del()
    .then(() => knex('pedidos').insert(pedido));