const chai = require('chai');
const { expect } = chai;

const url = `http://localhost:4000/`;
const request = require('supertest')(url);

describe('Testa endpoint clientes', () => {
  it('Testa endpoint lista clientes', (done) => {
    request.post('/')
      .send({ query: '{ clientes { id nomeCompleto email cpf dataNascimento } }'})
      .expect(200)
      .end((err,res) => {
          if (err) return done(err);
          expect(res.body.data.clientes[0]).to.have.property('id');
          expect(res.body.data.clientes[0]).to.have.property('nomeCompleto');
          expect(res.body.data.clientes[0]).to.have.property('email');
          expect(res.body.data.clientes[0]).to.have.property('cpf');
          expect(res.body.data.clientes[0]).to.have.property('dataNascimento');
          done();
      })
  })
  it('Testa endpoint que traz um cliente', (done) => {
    request.post('/')
      .send({ query: '{ cliente(id: 1){ id nomeCompleto email cpf dataNascimento } }' })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
          expect(res.body.data.cliente).to.have.property('id');
          expect(res.body.data.cliente).to.have.property('nomeCompleto');
          expect(res.body.data.cliente).to.have.property('email');
          expect(res.body.data.cliente).to.have.property('cpf');
          expect(res.body.data.cliente).to.have.property('dataNascimento');
          done();
      })
  })
});