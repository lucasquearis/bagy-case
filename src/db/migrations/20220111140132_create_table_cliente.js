// https://medium.com/@MajikMan/starting-a-node-project-from-scratch-with-sqlite3-knex-and-express-fb4b765aca

exports.up = (knex) => knex.schema.createTable('clientes', (table) => {
    table.increments('id').primary();
    table.text('nomeCompleto').notNullable();
    table.text('email').unique().notNullable();
    table.text('cpf').unique().notNullable();
    table.text('dataNascimento').notNullable();
  });

exports.down = (knex) => knex.schema.dropTable('contatos');
