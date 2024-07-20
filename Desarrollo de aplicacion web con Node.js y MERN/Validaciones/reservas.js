import Joi from 'joi'

export const validar = reserva => {
    
    const reservaSchema = Joi.object({
        nombre: Joi.string().required(),
        cantidad_personas: Joi.number().min(1).max(20).required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        telefono: Joi.number().required(),
        fecha_reserva: Joi.date().required()
    })

    const { error } = reservaSchema.validate(reserva);
    if(error) {
        return { result: false, error }
    }

    return { result: true}
}




