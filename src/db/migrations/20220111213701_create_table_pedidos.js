
exports.up = function(knex) {
  return knex.schema.createTable('pedidos', table => {
    table.increments('id').primary();
    table.text('produtos').notNullable();
    table.text('dataVenda').notNullable();
    table.text('parcelas').notNullable();
    table.integer('clienteId').unsigned().notNullable();
    table.foreign('clienteId').references('clientes.id');
    table.text('status').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('pedidos');
};
