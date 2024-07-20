import ApiPlatos from '../API/platos.js'


class ControladorPlatos {

    constructor() {
        this.apiPlatos = new ApiPlatos()
    }

    obtenerPlatos = async (req, res) =>{
    
    res.json(await this.apiPlatos.obtenerPlatos())

    }
    
    
}

export default ControladorPlatos