// https://www.4devs.com.br/gerador_de_pessoas

const { clientes } = require('../mocks/clientes');

exports.seed = (knex) => knex('clientes').del()
    .then(() => knex('clientes').insert(clientes));
