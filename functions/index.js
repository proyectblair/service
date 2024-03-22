const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });

const transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "proyectoblairwitch@gmail.com",
        pass: "jbmxzcszvsxquxyd",
    },
});

// Configurar CORS middleware
const corsHandler = cors({ origin: true });

const sendContactForm = (formData) => {
    return transport.sendMail({
        subject: "Nuevo mensaje del formulario",
        html: `
            <h3>Tienes un nuevo mensaje!</h3>
            <p>Nombre: ${formData.nombre} </p>
            <p>Apellido: ${formData.apellido} </p>
            <p>Telefono: ${formData.telefono} </p>
            <p>Email: ${formData.email} </p>
            <p>Mensaje: ${formData.mensaje} </p>
        `,
    });
};

exports.contactForm = functions.https.onRequest((req, res) => {
    corsHandler(req, res, () => {
        if (req.method !== 'POST') {
            return res.status(405).send('Method Not Allowed');
        }

        if (req.body.secret !== "firebaseIsCool") {
            return res.status(403).send("Forbidden");
        }

        sendContactForm(req.body)
            .then(() => res.send("Sending email..."))
            .catch((error) => {
                console.error('Error al enviar el formulario:', error);
                res.status(500).send("Error al enviar el formulario");
            });
    });
});
