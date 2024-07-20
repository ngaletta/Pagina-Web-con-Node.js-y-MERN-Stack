import Platos from '../../productos/platos.js'

class ModelPlatos{

constructor(){
    this.platos = new Platos()
}

obtenerPlatos = async () =>{
    console.log(this.platos)
    return await Promise.resolve (this.platos)
}

}

export default ModelPlatos