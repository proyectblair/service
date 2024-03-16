const {onRequest}=require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: "proyectoblairwitch@gmail.com",
        pass: "jbmxzcszvsxquxyd",
    },
});

const sendContactFrom = (form) => {
    return transport
        .sendMail({
            subject: "Nuevo mensaje del formulario",
            html: `
                <h3>Tienes un nuevo mensaje!</h3>
                <p>Nombre: ${form.name} </p>
                <p>Apellido: </p>
                <p>Telefono: </p>
                <p>Email: </p>
                <p>Mensaje: </p>
            `,
        })
        .then((r) => {
            console.log("Accepted => ", r.accepted);
            console.log("Rejected => ", r.rejected);
        })
        .catch((e) => console.log(e));
};

exports.contactForm = onRequest((req, res) => {
    if(req.body.secret !== 'firebaseIsCool') return res.send('Missing secret');
    sendContactFrom(req.body)
    res.send("Sending email...");
});
