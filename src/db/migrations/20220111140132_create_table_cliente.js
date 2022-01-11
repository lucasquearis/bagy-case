
exports.up = function(knex) {
  return knex.schema.createTable('clientes', table => {
    table.increments('id').primary();
    table.string('nomeCompleto');
    table.string('email').unique();
    table.string('cpf').unique();
    table.timestamps('dataNascimento');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('contatos');
};
