import { faker } from '@faker-js/faker/locale/en'

const get = _ => ({
    nombre: faker.person.fullName(),
    cantidad_personas: faker.number.int({ min: 1, max: 20 }),
    telefono: faker.phone.number('11 #### ####'),
    email: faker.internet.email(),
    fecha_reserva: faker.date.future()
})

export default {
    get
}