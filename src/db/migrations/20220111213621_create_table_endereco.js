exports.up = (knex) => {
  knex.raw('PRAGMA foreign_keys = ON').then(() => {
    console.log('Foreign Key Check activated.');
});
    return knex.schema.createTable('enderecos', (table) => {
      table.increments('id').primary();
      table.integer('enderecoClienteId').unsigned().notNullable().unique();
      table.foreign('enderecoClienteId').references('clientes.id');
      table.text('rua').notNullable();
      table.text('bairro').notNullable();
      table.text('cidade').notNullable();
      table.text('estado').notNullable();
      table.text('pais').notNullable();
      table.text('cep').notNullable();
      table.integer('numero').notNullable();
  });
};

exports.down = (knex) => knex.schema.dropTable('enderecos');
