exports.up = (knex) => knex.schema.createTable('produtos', (table) => {
    table.increments('id').primary();
    table.text('nome').notNullable().unique();
    table.text('imagem').notNullable();
    table.text('descricao').notNullable();
    table.text('peso').notNullable();
    table.double('preco').notNullable();
    table.integer('quantidadeEstoque').notNullable();
  });

exports.down = (knex) => knex.schema.dropTable('produtos');
