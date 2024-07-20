//import ReservasFS from '../model/DAOs/reservasFS.js'
import ModelMongoDB from '../model/DAOs/reservasMongoDB.js'
import MailSender from './mailSender.js'
import { validar } from '../Validaciones/reservas.js'

class ApiReservas {

    constructor() {
        this.reservasDAO = new ModelMongoDB()
    }

    async obtenerReservas() {
        return await this.reservasDAO.obtenerReservas()
    }

    async obtenerReserva(id) {
        return await this.reservasDAO.obtenerReservas(id)
    }

    guardarReserva = async (reserva) => {

        const res = validar(reserva)

        if (res.result) {

            const reservaNew = await this.reservasDAO.guardarReserva(reserva)

            //envio el email de reserva
            MailSender.enviarMailReserva(reservaNew)

            return reservaNew
        }
        else {
            throw res.error
        }

    }

    async eliminarReserva(id) {
        return await this.reservasDAO.eliminarReserva(id)
    }

    async actualizarReserva(id, reservaNew) {
        return await this.reservasDAO.actualizarReserva(id, reservaNew)
    }

}

export default ApiReservas