import { useContext } from "react";
import ContextoPersonajes from "../contextos/ContextoPersonajes";

const Formulario = () => {
  const { listaPersonajes, setListaPersonajes } = useContext(ContextoPersonajes);

  const submitPersonaje = (e) => {
    e.preventDefault();
    console.log("dads");
    if (!listaPersonajes.find(personaje => personaje.nombre.toLowerCase() === `${e.target[0].value} ${e.target[1].value}`)) {
      setListaPersonajes(
        listaPersonajes,
        {
          nombre: `${e.target[0].value} ${e.target[1].value}`,
          edad: e.target[2].value,
        });
      console.log("dentro");

    }

  };
  return (
    <form className="col" onSubmit={submitPersonaje}>
      <div className="form-group row align-items-center">
        <label htmlFor="nombre" className="col-1">Nombre: </label>
        <input type="text" className="form-control col-4" id="nombre" />
        <label htmlFor="apellido" className="col-1">Apellido: </label>
        <input type="text" className="form-control col" id="apellido" />
      </div>
      <div className="form-group row align-items-center">
        <label htmlFor="edad" className="col-1">Edad: </label>
        <select id="edad" className="form-control col-4">
          <option value="">Selecciona edad</option>
          <option value="menos de 5 años">menos de 5 años</option>
          <option value="menos de 10 años">menos de 10 años</option>
          <option value="menos de 20 años">menos de 20 años</option>
          <option value="menos de 40 años">menos de 40 años</option>
          <option value="menos de 60 años">menos de 60 años</option>
          <option value="menos de 80 años">menos de 80 años</option>
          <option value="menos de 100 años">menos de 100 años</option>
          <option value="menos de 110 años">menos de 110 años</option>
        </select>
        <button className="btn btn-info col" type="submit">Añadir personaje</button>
      </div>
    </form>
  );
};

export default Formulario;
