const validaEmail = (email) => !!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);

module.exports = { validaEmail };