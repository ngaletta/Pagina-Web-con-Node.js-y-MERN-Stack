import axios from "axios";

const pruebaServidorConAxios = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts'

    try {
        const rta = await axios(url)
        const { status, data:body } = rta
        
        console.log('status code', status)
        console.log('body', body)
    }
    catch(error) {
        console.log('error:', error.message)
    }
}

const pruebaServidorConSuperTest = async () => {
    const url = 'http:/127.0.0.1:8080/LaMixtureria'

    try {
        const request = supertest(url)

        //const rta = await request.get() por parametros va la especificacion de la ruta 
        const { status, body } = rta

        console.log('status code', status)
        console.log('body', body)
    }
    catch(error) {
        console.log('error:', error.message)
    }
}

pruebaServidorConAxios()