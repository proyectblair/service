const {onRequest} = require("firebase-functions/v2/https");
const nodemailer = require("nodemailer");
const cors = require("cors");


const corsHandler = cors({origin: true});

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "proyectoblairwitch@gmail.com",
    pass: "jbmxzcszvsxquxyd",
  },
});

const sendContactFrom = (formData) => {
  return transport.sendMail({
    from: "holis",
    to: "proyectoblairwitch@gmail.com",
    subject: "Nuevo mensaje del formulario",
    html: `
    <h3>Tienes un nuevo mensaje!</h3>
    <p>Nombre: ${formData.nombre} </p>
    <p>Apellido: ${formData.apellido} </p>
    <p>Telefono: ${formData.telefono} </p>
    <p>Email: ${formData.email} </p>
    <p>Mensaje: ${formData.mensaje} </p>`}).then((r) => {
    console.log("Accepted => ", r.accepted);
    console.log("Rejected => ", r.rejected);
  }).catch((e) => console.log(e));
};

exports.contactForm = onRequest((req, res) =>{
  corsHandler(req, res, () => {
    if (req.body.secret !== "firebaseIsCool") return res.send("Missing secret");
    console.log("Recibiendo datos del formulario:", req.body);
    sendContactFrom(req.body);
    res.send("Sending email...");
  });
});
