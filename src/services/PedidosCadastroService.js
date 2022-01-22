const db = require('../db');
const { enviaEmail } = require('../../emailServer');
const { validaData } = require('./helpers/validaData');
const { validaParcelas } = require('./helpers/validaParcelas');
const { validaStatus, statusDisponiveis } = require('./helpers/validaStatus');

const produtosEmailInfo = [];

const validaPedido = (data, listaProdutos = []) => {
  switch (false) {
    case validaData(data.dataVenda):
      throw new Error('Insira uma data válida no formato DD/MM/YYYY');
    case validaParcelas(data.parcelas):
      throw new Error('Insira um número de parcela maior que 0 e menor que 12');
    case validaStatus(data.status):
      throw new Error(`Status inválido, por favor insira algum desses: ${statusDisponiveis}`);
    default:
      break;
  }
  listaProdutos.forEach(({ quantidade }) => {
    if (quantidade < 1) throw new Error('Por favor insira um produto com quantidade maior que 0');
  });
};

const verificaQuantidadeProduto = async (id, quantidade) => {
  const response = await db('produtos').where({ id }).first();
  const infoProduto = { produto: response.nome, quantidade, preco: (quantidade * response.preco) };
  produtosEmailInfo.push(infoProduto);
  if (quantidade > response.quantidadeEstoque) {
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
    .map(({ produto,
            quantidade,
            preco, 
      }) => `Produto: ${produto} - Quantidade: ${quantidade} - Preço Total: ${preco}`)
    .join('\n'));
  return response;
};

class PedidosCadastroService {
  pedido = async (id) => db('pedidos').where({ id }).first();

  pedidos = async () => db('pedidos');

  criaPedido = async (data, listaProdutos) => {
    validaPedido(data, listaProdutos);
    listaProdutos.forEach(({ id, quantidade }) => {
      verificaQuantidadeProduto(id, quantidade);
      atualizaQuantidadeProduto(id, quantidade);
    });

    return criaPedidoBanco(data, listaProdutos);
  };

  atualizaPedido = async (id, data) => {
    validaPedido(data);
    const response = await db('pedidos').where({ id }).update(data);
    return response;
  }

  deletaPedido = async (id) => db('pedidos').where({ id }).delete();
}

module.exports = new PedidosCadastroService();