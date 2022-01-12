
exports.up = function(knex) {
  return knex.schema.createTable('produtos', table => {
    table.increments('id').primary();
    table.text('nome').notNullable();
    table.text('imagem').notNullable();
    table.text('descricao').notNullable();
    table.text('peso').notNullable();
    table.text('preco').notNullable();
    table.text('quantidadeEstoque').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('produtos');
};
