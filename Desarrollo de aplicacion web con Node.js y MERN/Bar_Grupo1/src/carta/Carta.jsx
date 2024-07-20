import { Link, Outlet } from "react-router-dom";
import Boton from "../components/boton/Boton";


const Carta = () => {
        return (
        <>
        <div> 
            <h1 className="TituloCarta">NUESTRA CARTA</h1>
        </div>
        <div>
          <Boton name= {"Platos"} url= {"/LaMixtureria/Carta/Platos"}/>
          <br></br>
          <Boton name= {"Tragos"} url= {"/LaMixtureria/Carta/Tragos"}/>
        </div>
        <Outlet/>
        </>
          
        )
      };
  
export default Carta

//Aca hice como en la pagina de Green Bamboo que cuando apretas donde dice "Nuestro menu" te lleva a
//una pagina donde tenes tres botones. En nuestro caso, le puse para que hayan dos botones que uno
//es para Platos y el otro para Tragos.