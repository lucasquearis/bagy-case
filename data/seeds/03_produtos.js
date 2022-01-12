const { produtos } = require('../mocks/produtos');

exports.seed = (knex) => knex('produtos').del()
    .then(() => knex('produtos').insert(produtos));
