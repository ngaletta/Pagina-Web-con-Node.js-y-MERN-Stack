import Plato from "./Plato";

const PlatosMap = ({ platos }) => {
  
  return platos.map((plato) => {
    return <Plato key={plato.id} plato={plato} />;
  });
};
export default PlatosMap;