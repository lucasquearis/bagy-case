const validaNome = (nome) => !!nome.match(/^[A-Z][a-zA-Z]{3,}(?: [A-Z][a-zA-Z]*){0,2}$/);

module.exports = { validaNome };