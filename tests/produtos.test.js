const chai = require('chai');
const { expect } = chai;

const url = `http://localhost:4000/`;
const request = require('supertest')(url);

describe('Testa endpoint produtos', () => {
  it('Testa endpoint lista produtos', (done) => {
    request.post('/')
      .send({ query: '{ produtos { id nome imagem descricao peso preco quantidadeEstoque } }'})
      .expect(200)
      .end((err,res) => {
          if (err) return done(err);
          expect(res.body.data.produtos[0]).to.have.property('id');
          expect(res.body.data.produtos[0]).to.have.property('nome');
          expect(res.body.data.produtos[0]).to.have.property('imagem');
          expect(res.body.data.produtos[0]).to.have.property('descricao');
          expect(res.body.data.produtos[0]).to.have.property('peso');
          expect(res.body.data.produtos[0]).to.have.property('preco');
          expect(res.body.data.produtos[0]).to.have.property('quantidadeEstoque');
          done();
      })
  })
  it('Testa endpoint que traz um produto', (done) => {
    request.post('/')
      .send({ query: '{ produto(id: 1){ id nome imagem descricao peso preco quantidadeEstoque } }' })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.data.produto).to.have.property('id');
        expect(res.body.data.produto).to.have.property('nome');
        expect(res.body.data.produto).to.have.property('imagem');
        expect(res.body.data.produto).to.have.property('descricao');
        expect(res.body.data.produto).to.have.property('peso');
        expect(res.body.data.produto).to.have.property('preco');
        expect(res.body.data.produto).to.have.property('quantidadeEstoque');
        done();
      })
  })
});