import { useEffect, useState } from "react";
import TragosMap from "./TragosMap";

const TragosContainer = () => {

  const [tragos, setTragos] = useState([]);
  
  useEffect(() => {
    fetch("http://127.0.0.1:8080/LaMixtureria/Carta/Tragos")
      .then((response) => response.json())
      .then((data) => setTragos(data.tragos));
  }, []);


  return <TragosMap tragos={tragos} />;
};
export default TragosContainer;