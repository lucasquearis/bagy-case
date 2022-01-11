let clientes = require('../../../mock/clientes');

const db = require('../../../db');

module.exports = {
  Query: {
    cliente: (_, args) => clientes.find((cliente) => cliente.id === args.id),
    clientes: async () =>  await db("clientes") ,
  },
  Mutation: {
    criaCliente: async (_, { data }) => {
      const [response] = await db("clientes").insert(data);
      return response;
    },

    atualizaCliente: async (_, { id, data }) => {
      const [response] = await db('clientes').where({ id }).update(data);
      return response;
    },

    deletaCliente: async(_, { filtro: { id, cpf, email } }) => {
      if (id) {
        return await db("clientes").where({id}).delete();
      }
      if (cpf) {
        return await db("clientes").where({cpf}).delete();
      }
      if (email) {
        return await db("clientes").where({email}).delete();
      }
      throw new Error('Favor passar um parametro sendo eles, id, cpf ou email!')
    }
  }
};
