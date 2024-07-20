import { expect } from "chai"
import supertest from "supertest"
import generador from './generador/reserva.js'

const request = supertest('http://127.0.0.1:8080')

describe('test apirest ful', () => {

    describe('GET', () => {
        it('deberia retornar un status 200', async () => {
            const response = await request.get('/LaMixtureria/Reservas/')
            expect(response.status).to.eql(200)
        })
    })

    describe('POST', () => {
        it('deberia incorporar una reserva', async () => {
            const reserva = generador.get()
            

            const response = await request.post('/LaMixtureria/Reservas/').send(reserva)
            expect(response.status).to.eql(200)

            const reser = response.body
            expect(reser).to.include.keys('nombre', 'cantidad_personas', 'telefono', 'email', 'fecha_reserva')

            expect(reser.nombre).to.eql(reserva.nombre)
            expect(reser.cantidad_personas).to.eql(reserva.cantidad_personas)
            expect(reser.telefono).to.eql(reserva.telefono)
            expect(reser.email).to.eql(reserva.email)

            const reserva_fecha_reserva = new Date(reserva.fecha_reserva)
            const reser_fecha_reserva = new Date(reser.fecha_reserva)

            expect(reser_fecha_reserva).to.eql(reserva_fecha_reserva)
        })

         


    })

})

