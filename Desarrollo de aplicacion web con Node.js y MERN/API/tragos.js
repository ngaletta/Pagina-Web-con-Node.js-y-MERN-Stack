import ModelTragos from '../model/DAOs/tragos.js'



class ApiTragos {

    constructor() {
  this.modelTragos = new ModelTragos()
    }
    
    obtenerTragos = async () =>{return await this.modelTragos.obtenerTragos()}
}

export default ApiTragos 
