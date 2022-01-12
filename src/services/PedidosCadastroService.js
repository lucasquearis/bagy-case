const db = require('../db');
const { enviaEmail } = require('../../emailServer');

const produtosEmailInfo = [];


const verificaQuantidadeProduto = async (id, quantidade) => {
  const response = await db('produtos').where({ id }).first();
  const infoProduto = {produto: response.nome, quantidade, preco: (quantidade*response.preco)};
  produtosEmailInfo.push(infoProduto);
  if(quantidade > response.quantidadeEstoque) {
    throw new Error('Número de produtos indisponíveis');
  }
  return true;
};

const atualizaQuantidadeProduto = async (id, quantidade) => {
  const response = await db('produtos').where({ id }).first();

  const atualizaQuantidade = response.quantidadeEstoque - quantidade;

  return db('produtos').where({ id }).update({ quantidadeEstoque: atualizaQuantidade });
};

const criaPedidoBanco = async (data, listaProdutos) => {
  const { clienteId } = data;
  const formatoBanco = {
    ...data,
    produtos: JSON.stringify(listaProdutos),
  };

  const [response] = await db('pedidos').insert(formatoBanco);
  const { email } = await db('clientes').where({ id: clienteId }).first();
  enviaEmail(email, produtosEmailInfo
    .map(({ produto, quantidade, preco }) => `Produto: ${produto} - Quantidade: ${quantidade} - Preço Total: ${preco}`)
    .join('\n'));
  return response;
}

class PedidosCadastroService {
  pedido = async (id) => await db('pedidos').where({ id }).first();

  pedidos = async () => await db('pedidos');

  criaPedido = async (data, listaProdutos) => {

    listaProdutos.forEach(({id, quantidade}) => verificaQuantidadeProduto(id, quantidade));

    listaProdutos.forEach(({id, quantidade}) => atualizaQuantidadeProduto(id, quantidade));

    return criaPedidoBanco(data, listaProdutos);
  };

  atualizaPedido = async (id, data) => {
    const [response] = await db('pedidos').where({ id }).update(data);
    return response;
  }

  deletaPedido = async (id) => db('pedidos').where({ id }).delete();
};

module.exports = new PedidosCadastroService();