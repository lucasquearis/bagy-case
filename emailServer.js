// https://www.geeksforgeeks.org/how-to-send-email-with-nodemailer-using-gmail-account-in-node-js/

const nodemailer = require('nodemailer');

require('dotenv').config();

const mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.PASSWORD_EMAIL,
    },
});

const enviaEmail = (email, text) => {
    const mailDetails = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Compra Realizada Com Sucesso',
        text,
    };
      
    mailTransporter.sendMail(mailDetails, (err) => {
        if (err) {
            console.log('Ocorreu algum erro e seu email, não foi enviado');
        } else {
            console.log('Email enviado com sucesso');
        }
    });
};

module.exports = { enviaEmail };