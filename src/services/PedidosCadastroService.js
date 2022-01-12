const db = require('../db');

const verificaQuantidadeProduto = async (id, quantidade) => {
  const response = await db('produtos').where({ id }).first();
  if(quantidade > response.quantidadeEstoque) {
    throw new Error('Número de produtos indisponíveis');
  }
  const atualizaQuantidade = response.quantidadeEstoque - quantidade;

  return db('produtos').where({ id }).update({ quantidadeEstoque: atualizaQuantidade });
}

class PedidosCadastroService {
  pedido = async (id) => await db('pedidos').where({ id }).first();

  pedidos = async () => await db('pedidos');

  criaPedido = async (data, produtos) => {
    const { id, quantidade } = produtos;
    console.log(data);
    console.log(produtos);
    verificaQuantidadeProduto(id, quantidade);
    const novoFormatoBanco = {
      ...data,
      produtos: JSON.stringify([...produtos]),
    }
    const response = await db('pedidos').insert(novoFormatoBanco);
    return response;
  };

  atualizaPedido = async (id, data) => {
    const [response] = await db('pedidos').where({ id }).update(data);
    return response;
  }

  deletaPedido = async (id) => db('pedidos').where({ id }).delete();
};

module.exports = new PedidosCadastroService();