// https://www.4devs.com.br/gerador_de_pessoas
exports.seed = function(knex) {
  return knex('clientes').del()
    .then(function () {
      return knex('clientes').insert([
        {
          nomeCompleto: 'Mario da Silva',
          email: 'mariosilva@email.com',
          cpf: '040.234.180-56',
          dataNascimento: '16/08/1987'
        },
        {
          nomeCompleto: 'Marina Alves da Costa',
          email: 'marina.dev@email.com',
          cpf: '554.296.060-06',
          dataNascimento: '7/10/1995'
        },
        {
          nomeCompleto: 'Rodrigo Bruno Souza',
          email: 'rrodrigobrunosouza@projetemovelaria.com.br',
          cpf: '619.906.789-47',
          dataNascimento: '02/01/2003'
        },
        {
          nomeCompleto: 'Augusto Lucca Rafael da Costa',
          email: 'augustoluccarafaeldacosta_@nhrtaxiaereo.com',
          cpf: '253.039.189-04',
          dataNascimento: '10/01/2003'
        },
      ]);
    });
};
