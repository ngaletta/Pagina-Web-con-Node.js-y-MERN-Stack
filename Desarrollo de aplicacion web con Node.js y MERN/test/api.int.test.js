import { expect } from "chai"
import supertest from "supertest"
import generador from './generador/reserva.js'
import Server from '../server.js'


describe('test apirest ful', () => {

    describe('GET', () => {
        it('deberia retornar un status 200', async () => {
           const server = new Server(8081, 'MONGODB')
           const app = await server.start()

           const request = supertest(app)
           const response = await request.get('/LaMixtureria/Reservas')

           expect(response.status).to.eql(200)

           server.stop()
        })
    })

    describe('POST', () => {
        it('deberia incorporar una reserva', async () => {
            const server = new Server(8081, 'MONGODB')
            const app = await server.start()

            const request = supertest(app)

            const reserva = generador.get()
            
            const response = await request.post('/LaMixtureria/Reservas').send(reserva)

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

            await server.stop()
        })

         


    })

})

