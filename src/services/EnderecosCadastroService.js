const db = require('../db');

class EnderecosCadastroService {
  endereco = async (id) => db('enderecos').where({ id }).first();

  enderecos = async () => db('enderecos');

  criaEndereco = async (data) => {
    console.log(data);
    const [enderecoId] = await db('enderecos').insert(data);
    const response = this.endereco(enderecoId);
    return response;
  }

  atualizaEndereco = async (id, data) => {
    const response = await db('enderecos').where({ id }).update(data);
    if (response) return this.endereco(id);
  }

  deletaEndereco = async (id) => db('enderecos').where({ id }).delete();
}

module.exports = new EnderecosCadastroService();