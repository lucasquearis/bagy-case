// https://www.4devs.com.br/gerador_de_pessoas

const { enderecos } = require('../mocks/enderecos');

exports.seed = (knex) => knex('enderecos').del()
    .then(() => knex('enderecos').insert(enderecos));
