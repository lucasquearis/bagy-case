const db = require('../db');

class EnderecosCadastroService {
  endereco = async (id) => await db('enderecos').where({ id }).first();

  enderecos = async () => await db('enderecos');

  criaEndereco = async (data) => {
    const [response] = await db('enderecos').insert(data);
    return response;
  }

  atualizaEndereco = async (id, data) => {
    const [response] = await db('enderecos').where({ id }).update(data);
    return response;
  }

  deletaEndereco = async (id) => db('enderecos').where({ id }).delete();
};

module.exports = new EnderecosCadastroService();