const chai = require('chai');
const { expect } = chai;

const url = `http://localhost:4000/`;
const request = require('supertest')(url);

describe('Testa endpoint endereços', () => {
  it('testa endpoint lista endereços', (done) => {
    request.post('/')
      .send({ query: '{ enderecos { id enderecoClienteId rua bairro cidade estado pais cep numero } }'})
      .expect(200)
      .end((err,res) => {
          if (err) return done(err);
          expect(res.body.data.enderecos[0]).to.have.property('id');
          expect(res.body.data.enderecos[0]).to.have.property('enderecoClienteId');
          expect(res.body.data.enderecos[0]).to.have.property('rua');
          expect(res.body.data.enderecos[0]).to.have.property('bairro');
          expect(res.body.data.enderecos[0]).to.have.property('cidade');
          expect(res.body.data.enderecos[0]).to.have.property('estado');
          expect(res.body.data.enderecos[0]).to.have.property('pais');
          expect(res.body.data.enderecos[0]).to.have.property('cep');
          expect(res.body.data.enderecos[0]).to.have.property('numero');
          done();
      })
  })
  it('Testa endpoint que traz um endereco', (done) => {
    request.post('/')
      .send({ query: '{ endereco(id: 1){ id enderecoClienteId rua bairro cidade estado pais cep numero } }' })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.data.endereco).to.have.property('id');
        expect(res.body.data.endereco).to.have.property('enderecoClienteId');
        expect(res.body.data.endereco).to.have.property('rua');
        expect(res.body.data.endereco).to.have.property('bairro');
        expect(res.body.data.endereco).to.have.property('cidade');
        expect(res.body.data.endereco).to.have.property('estado');
        expect(res.body.data.endereco).to.have.property('pais');
        expect(res.body.data.endereco).to.have.property('cep');
        expect(res.body.data.endereco).to.have.property('numero');
          done();
      })
  })
});