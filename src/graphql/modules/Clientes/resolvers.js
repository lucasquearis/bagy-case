let clientes = require('../../../mock/clientes');

const geradorId = (lista) => {
  let novoId;
  let ultimo = lista[lista.length - 1];
  if (!ultimo) {
    novoId = 0;
  } else {
    novoId = ultimo.id;
  }
  return ++novoId;
};

module.exports = {
  Query: {
    cliente: (_, args) => clientes.find((cliente) => cliente.id === args.id),
    clientes: () => clientes,
  },
  Mutation: {
    criarCliente(_, {data}) {

      const clienteExistente = clientes.some(cliente => cliente.email === data.email)

      if(clienteExistente) {
        throw new Error(`Cliente Existente: ${data.nomeCompleto}`)
      }

      const novoCliente = {
        ...data,
        id: geradorId(clientes),
      }

      clientes.push(novoCliente);
      return novoCliente;
    },

    atualizaCliente(_, {id, data}) {
      const cliente = clientes.find(u => u.id === id);
      const indice = clientes.findIndex(u => u.id === id);

      const novoCliente = {
        ...cliente,
        ...data,
      }

      clientes.splice(indice, 1, novoCliente);

      return novoCliente;
    },

    deletaCliente(_, { filtro: { id, cpf } }) {
      const condicao = id ? { id } : { cpf }
      return deletarCliente(condicao)
    }
  }
};

const deletarCliente = (filtro) => {
  const [chave] = Object.keys(filtro);
  const [valor] = Object.values(filtro);

  const clienteEncontrado = clientes.find(cliente => cliente[chave] === valor);
  const clientesFiltrados = clientes.filter(cliente => cliente[chave] !== valor)
  clientes = clientesFiltrados;

  return !!clienteEncontrado
}