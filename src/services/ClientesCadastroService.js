const db = require('../db');
const { validaNome } = require('./helpers/validaNome');
const { validaEmail } = require('./helpers/validaEmail');
const { validaCpf } = require('./helpers/validaCpf');
const { validaData } = require('./helpers/validaData');

class ClientesCadastroService {
  cliente = async (id) => db('clientes').where({ id }).first();

  clientes = async () => db('clientes');

  criaCliente = async (data) => {
    switch (false) {
      case validaEmail(data.email):
        throw new Error('Insira um email válido');
      case validaNome(data.nomeCompleto):
        throw new Error('Insira um nome completo válido, com iniciais maiusculas');
      case validaCpf(data.cpf):
        throw new Error('Insira um cpf válido, sem nenhuma pontuação');
      case validaData(data.dataNascimento):
      throw new Error('Insira uma data válida no formato DD/MM/YYYY');
      default:
        break;
    }
    const [response] = await db('clientes').insert(data);
    return response;
  }

  atualizaCliente = async (id, data) => {
    const response = await db('clientes').where({ id }).update(data);
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
