const listaProdutos = [{ id: 3, quantidade: 3 }];

const pedido = {
  dataVenda: '20/02/2005',
  parcelas: 4,
  clienteId: 3,
  status: 'Pedido Efetuado',
  produtos: JSON.stringify(listaProdutos),
};

module.exports = { pedido };