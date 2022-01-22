const validaNome = (nome) => !!nome.match(/[A-Z][a-z]* [A-Z][a-z]*/);

module.exports = { validaNome };