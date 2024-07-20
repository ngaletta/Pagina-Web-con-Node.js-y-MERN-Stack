import NodeMailer from 'nodemailer'

class MailSender {

    static enviarMailReserva = async (reserva) => {

        //Configuracion del servicio
        var transporter = NodeMailer.createTransport({
            //service: process.env.EMAIL_SERVICE,
            host: process.env.EMAIL_HOST,
            secure: false,
            port: process.env.EMAIL_PORT,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        //Cuerpo del email a enviar
        var mailOptions = {
            from: process.env.EMAIL_USER,
            to: reserva.email,
            subject: 'Confirmacion de reserva en La Mixtureria',
            //html: '<h2>Gracias ' + reserva.nombre + '</h2>' + '<h4>Usted ha reservado para ' + reserva.cantidad_personas + ' personas para el dia ' + new Date(reserva.fecha_reserva * 1000).toLocaleDateString() + '</h4>'
            html: '<h2>Gracias ' + reserva.nombre + '</h2>' + '<h4>Usted ha reservado para ' + reserva.cantidad_personas + ' personas para el dia ' + reserva.fecha_reserva + '</h4>'
        };

        //Enviar el email
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email enviado: ' + info.response);
            }
        });

    }
}

export default MailSender