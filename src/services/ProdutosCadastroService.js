const db = require('../db');

class ProdutosCadastroService {
  produto = async (id) => db('produtos').where({ id }).first();

  produtos = async () => db('produtos');

  criaProduto = async (data) => {
    const [response] = await db('produtos').insert(data);
    return response;
  }

  atualizaProduto = async (id, data) => {
    const response = await db('produtos').where({ id }).update(data);
    return response;
  }

  deletaProduto = async (id) => db('produtos').where({ id }).delete();
}

module.exports = new ProdutosCadastroService();