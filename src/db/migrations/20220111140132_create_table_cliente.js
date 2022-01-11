
// https://medium.com/@MajikMan/starting-a-node-project-from-scratch-with-sqlite3-knex-and-express-fb4b765aca

exports.up = function(knex) {
  return knex.schema.createTable('clientes', table => {
    table.increments('id').primary();
    table.text('nomeCompleto').notNullable();
    table.text('email').unique().notNullable();
    table.text('cpf').unique().notNullable();
    table.text('dataNascimento').notNullable();
    table.text('endereco').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('contatos');
};
