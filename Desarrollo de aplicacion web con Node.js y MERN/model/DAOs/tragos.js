import Tragos from '../../productos/tragos.js'

class ModelTragos{

constructor(){
    this.tragos = new Tragos()
}

obtenerTragos = async () =>{
    console.log(this.tragos)
    return await Promise.resolve (this.tragos)
}

}

export default ModelTragos