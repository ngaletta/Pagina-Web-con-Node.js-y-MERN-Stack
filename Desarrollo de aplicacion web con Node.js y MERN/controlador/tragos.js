import ApiTragos from '../API/tragos.js'


class ControladorTragos {

    constructor() {
        this.apiTragos = new ApiTragos()
    }

    obtenerTragos = async (req, res) =>{
    
    res.json( await this.apiTragos.obtenerTragos())

    }
    
    
}

export default ControladorTragos

// this.router.get('/', this.controlador.obtenerInicio)
// this.router.get('/', this.controlador.obtenerReservas)
// this.router.get('/', this.controlador.obtenerCarta)
// this.router.get('/', this.controlador.obtenerTragos)
// this.router.get('/', this.controlador.obtenerPlatos)
// this.router.get('/', this.controlador.obtenerSucursales)
// //this.router.get('/', this.controlador.obtenerSpotify)

