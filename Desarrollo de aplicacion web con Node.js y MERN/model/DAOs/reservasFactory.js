import ModelMongoDB from "./reservasMongoDB.js";
//import ReservasFS from "./reservasFS.js";
import { config } from "dotenv";


class ReservasFactoryDAO {
    static get(tipo) {
        switch(tipo) {
            //case 'FILE': return new ReservasFS(config.FILE)
            case 'MONGODB': return new ModelMongoDB(config.MONGODB)
                }
    }
}

export default ReservasFactoryDAO;
