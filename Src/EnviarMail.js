function EnviarMail(status, text)
{
 //Requerimos el paquete
 var nodemailer = require('nodemailer');

 //Creamos el objeto de transporte
 var transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
     user: 'gonzalo.joaquin.gomez@gmail.com',
     pass: 'Gonzalo.gomez85'
   }
 });

 var mensaje = text;

 var mailOptions = {
   from: 'gonzalo.joaquin.gomez@gmail.com',
   to: 'gonzalo.joaquin.gomez@gmail.com',
   subject: 'SUBTE B CON DEMORAS',
   text: mensaje
 };

 transporter.sendMail(mailOptions, function(error, info){
   if (error) {
     console.log(error);
   } else {
     console.log('Email enviado: ' + info.response);
   }
 });

   };

   module.exports.EnviarMail = EnviarMail;