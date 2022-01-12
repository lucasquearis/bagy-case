
exports.up = function(knex) {
  return knex.schema.createTable('produtos', table => {
    table.increments('id').primary();
    table.text('nome').notNullable();
    table.text('imagem').notNullable();
    table.text('descricao').notNullable();
    table.text('peso').notNullable();
    table.double('preco').notNullable();
    table.integer('quantidadeEstoque').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('produtos');
};
