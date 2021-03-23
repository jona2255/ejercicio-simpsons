import { useContext } from "react";
import ContextoPersonajes from "../contextos/ContextoPersonajes";

const Personaje = () => {
  const { listaPersonajes } = useContext(ContextoPersonajes);
  return (
    <>
      {
        listaPersonajes.map(personaje => (
          <tr key={personaje.nombre + personaje.edad} className="personaje">
            <td>{personaje.nombre}</td>
            <td>{personaje.edad}</td>
            <td>{personaje.imagen}</td>
          </tr>
        ))
      }
    </>
  );
};
export default Personaje;
