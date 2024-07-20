import ModelPlatos from '../model/DAOs/platos.js'



class ApiPlatos {

    constructor() {
  this.modelPlatos = new ModelPlatos()
    }
    
    obtenerPlatos = async () =>{return await this.modelPlatos.obtenerPlatos()}
}

export default ApiPlatos 