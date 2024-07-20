import { ObjectId } from "mongodb"
import CnxMongoDB from "../DBMongo.js"
import ReservasFactoryDAO from "./reservasFactory.js"

class ModelMongoDB {

    constructor(persistencia) {
        this.model = ReservasFactoryDAO.get(persistencia)
    }

    obtenerReservas = async id => {
        try{
            if(!CnxMongoDB.connectOk) return id? {} : []

            if(id) {
                const reserva = await CnxMongoDB.db.collection('reservas').findOne({_id: new ObjectId(id)})
                
                if(reserva){
                    return reserva
                }
                else{
                    return {}
                }
            }
            else {
                const reservas = await CnxMongoDB.db.collection('reservas').find({}).toArray()
                return reservas
            }
        }
        catch(error) {
            console.log('error en obtenerReservas', error)
            if(id) {
                return {}
            }
            else {
                return []
            }
        }
    }

    guardarReserva = async reserva => {
        try{
            if(!CnxMongoDB.connectOk) return {}

            //Obtiene fecha de hoy
            reserva.fecha_alta = Date.now()

            await CnxMongoDB.db.collection('reservas').insertOne(reserva)
            return reserva
        }
        catch(error) {
            console.log('error en guardarReserva:', error)
            return {}
        }  
    }

    actualizarReserva = async (id, reserva) => {
        try{
            if(!CnxMongoDB.connectOk) return {}

            await CnxMongoDB.db.collection('reservas').updateOne(
                {_id: new ObjectId(id)},
                { $set: reserva}
            )

            const reservaActualizada = await this.obtenerReservas(id)
            return reservaActualizada
        }
        catch(error) {
            console.log('error en actualizarReserva', error)
            return {}
        }
    }

    eliminarReserva = async id => {
        try{
            if(!CnxMongoDB.connectOk) return {}

            const reservaEliminada = await this.obtenerReservas(id)
            await CnxMongoDB.db.collection('reservas').deleteOne({_id: new ObjectId(id)})

            if(reservaEliminada){
                return reservaEliminada
            }
            else{
                return {}
            }
            
        }
        catch(error) {
            console.log('error en eliminarReserva', error)
            return {}
        }
    }
}

export default ModelMongoDB