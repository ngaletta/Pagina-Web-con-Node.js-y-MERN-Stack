import { expect } from 'chai'
import generador from './generador/reserva.js'

describe('Test generador de reserva', () => {

it('La reserva deberia poseer campos nombre, cantidad de personas, telefono, email y fecha reserva', () => {
    const reserva = generador.get()

    expect(reserva).to.include.keys('nombre', 'cantidad_personas', 'telefono', 'email', 'fecha_reserva')
})

it('Deberia generar reservas con datos aleatorios', () => {
    const reserv1 = generador.get()
    const reserv2 = generador.get()


    expect(reserv1.nombre).not.to.eql(reserv2.nombre),
    expect(reserv1.cantidad_personas).not.to.eql(reserv2.cantidad_personas),
    expect(reserv1.telefono).not.to.eql(reserv2.telefono),
    expect(reserv1.email).not.to.eql(reserv2.email);

    const reserva1_fecha_reserva = new Date(reserv1.fecha_reserva)
    const reserva2_fecha_reserva = new Date(reserv2.fecha_reserva)

    expect(reserva1_fecha_reserva).not.to.eql(reserva2_fecha_reserva)

   })
})
