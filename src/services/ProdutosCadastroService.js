const db = require('../db');
const { validaQuantidade } = require('./helpers/validaQuantidade');

const validaProduto = (data) => {
  switch (false) {
    case validaQuantidade(data.quantidadeEstoque):
      throw new Error('Por favor insira uma quantidadeEstoque maior do que zero');
    default:
      break;
  }
};

class ProdutosCadastroService {
  produto = async (id) => db('produtos').where({ id }).first();

  produtos = async () => db('produtos');

  criaProduto = async (data) => {
    validaProduto(data);
    const [produtoId] = await db('produtos').insert(data);
    return this.produto(produtoId);
  }

  atualizaProduto = async (id, data) => {
    const response = await db('produtos').where({ id }).update(data);
    if (response) return this.produto(id);
  }

  deletaProduto = async (id) => db('produtos').where({ id }).delete();
}

module.exports = new ProdutosCadastroService();