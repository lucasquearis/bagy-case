// Tentei deixar number mas recebi um erro com Int do GraphQL
const validaCpf = (cpf) => (cpf.length === 11);

module.exports = { validaCpf };