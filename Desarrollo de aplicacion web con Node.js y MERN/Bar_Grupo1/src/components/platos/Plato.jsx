
const Plato = ({ plato }) => {
    return (
      
        <div className="menu">
          <h1>{plato.nombre}</h1>
          <h2>Precio: ${plato.precio}</h2>
        </div>
      
    );
  };
  export default Plato;