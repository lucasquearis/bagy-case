// https://www.4devs.com.br/gerador_de_pessoas

exports.seed = function(knex) {
  return knex('enderecos').del()
    .then(function () {
      return knex('enderecos').insert([
        {
          enderecoClienteId: 1,
          rua: 'Rua José Silveira',
          bairro: 'Alto Boqueirão',
          cidade: 'Curitiba',
          estado: 'PR',
          pais: 'Brasil',
          cep: '81770-432',
          numero: 146
        },
        {
          enderecoClienteId: 2,
          rua: 'Praça Onofre Silvestre',
          bairro: 'Fazendinha',
          cidade: 'Curitiba',
          estado: 'PR',
          pais: 'Brasil',
          cep: '81770-205',
          numero: 594
        },
        {
          enderecoClienteId: 3,
          rua: 'Rua José Abentin',
          bairro: 'Vista Alegre',
          cidade: 'Curitiba',
          estado: 'PR',
          pais: 'Brasil',
          cep: '82100-100',
          numero: 475
        },
        {
          enderecoClienteId: 4,
          rua: 'Rua Guilherme Otto',
          bairro: 'Cachoeira',
          cidade: 'Curitiba',
          estado: 'PR',
          pais: 'Brasil',
          cep: '82710-320',
          numero: 23
        },
      ]);
    });
};
