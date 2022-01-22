const statusDisponiveis = [
  'Pedido Efetuado',
  'Aguardando pagamento',
  'Pedido Pago',
  'Pedido em separação',
  'Pedido Enviado',
];
const validaStatus = (status) => statusDisponiveis.includes(status);

module.exports = { validaStatus, statusDisponiveis };