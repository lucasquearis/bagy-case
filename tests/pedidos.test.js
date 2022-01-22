const chai = require('chai');
const { expect } = chai;

const url = `http://localhost:4000/`;
const request = require('supertest')(url);

describe('Testa endpoint pedidos', () => {
  it('testa endpoint lista pedidos', (done) => {
    before(() => {
      request.post('/')
        .send({ mutation: '{ criaPedido(data: {dataVenda: "20/02/2021",parcelas: 4,clienteId: 3,status: "enviado"},produtos: {id: 3,quantidade: 5}){id}'})
        .expect(200)
        .end((err) => {
          if(err) return done(err);
          done();
        })
    })
    request.post('/')
      .send({ query: '{ pedidos { id produtos dataVenda parcelas clienteId status } }'})
      .expect(200)
      .end((err,res) => {
          if (err) return done(err);
          expect(res.body.data.pedidos[0]).to.have.property('id');
          expect(res.body.data.pedidos[0]).to.have.property('produtos');
          expect(res.body.data.pedidos[0]).to.have.property('dataVenda');
          expect(res.body.data.pedidos[0]).to.have.property('parcelas');
          expect(res.body.data.pedidos[0]).to.have.property('clienteId');
          expect(res.body.data.pedidos[0]).to.have.property('status');
          done();
      })
  })
  it('Testa endpoint que traz um pedido', (done) => {
    before(() => {
      request.post('/')
        .send({ mutation: '{ criaPedido(data: {dataVenda: "20/02/2021",parcelas: 4,clienteId: 3,status: "enviado"},produtos: {id: 3,quantidade: 5}){id}'})
        .expect(200)
        .end((err) => {
          if(err) return done(err);
          done();
        })
    })
    request.post('/')
      .send({ query: '{ pedido(id: 1){ id produtos dataVenda parcelas clienteId status } }' })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.data.pedido).to.have.property('id');
        expect(res.body.data.pedido).to.have.property('produtos');
        expect(res.body.data.pedido).to.have.property('dataVenda');
        expect(res.body.data.pedido).to.have.property('parcelas');
        expect(res.body.data.pedido).to.have.property('clienteId');
        expect(res.body.data.pedido).to.have.property('status');
          done();
      })
  })
});