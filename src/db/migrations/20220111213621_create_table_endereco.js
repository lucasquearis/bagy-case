
exports.up = function(knex) {
  knex.raw('PRAGMA foreign_keys = ON').then(() => {
    console.log("Foreign Key Check activated.");
})
  knex.schema.hasTable('clientes').then(res => {
    if (res) {
      return knex.schema.createTable('enderecos', table => {
        table.increments('id').primary();
        table.integer('enderecoClienteId').unsigned().notNullable().unique();
        table.foreign('enderecoClienteId').references('clientes.id');
        table.text('rua').notNullable();
        table.text('bairro').notNullable();
        table.text('cidade').notNullable();
        table.text('estado').notNullable();
        table.text('pais').notNullable();
        table.text('cep').notNullable();
        table.text('numero').notNullable();
      })
    }
    return;
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('enderecos');
};
