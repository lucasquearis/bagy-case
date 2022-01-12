const db = require('../db');

class ClientesCadastroService {
  cliente = async (id) => db('clientes').where({ id }).first();

  clientes = async () => db('clientes');

  criaCliente = async (data) => {
    const [response] = await db('clientes').insert(data);
    return response;
  }

  atualizaCliente = async (id, data) => {
    const [response] = await db('clientes').where({ id }).update(data);
    return response;
  }

  deletaCliente = async ({ id, cpf, email }) => {
    if (id) {
      return db('clientes').where({ id }).delete();
    }
    if (cpf) {
      return db('clientes').where({ cpf }).delete();
    }
    if (email) {
      return db('clientes').where({ email }).delete();
    }
    throw new Error('Favor passar um parametro sendo eles, id, cpf ou email!');
  }
}

module.exports = new ClientesCadastroService();
