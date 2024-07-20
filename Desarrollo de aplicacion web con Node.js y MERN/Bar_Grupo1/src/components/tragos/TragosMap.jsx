import Trago from "./Trago";

const TragosMap = ({ tragos }) => {
  
  return tragos.map((trago) => {
    return <Trago key={trago.id} trago={trago} />;
  });
};
export default TragosMap;