import { useEffect, useState } from "react";
import PlatosMap from "./PlatosMap";

const PlatosContainer = () => {

  const [platos, setPlatos] = useState([]);
  
  useEffect(() => {
    fetch("http://127.0.0.1:8080/LaMixtureria/Carta/Platos")
      .then((response) => response.json())
      .then((data) => setPlatos(data.platos));
  }, []);


  return <PlatosMap platos={platos} />;
};
export default PlatosContainer;