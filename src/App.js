import { useState } from "react";
import Formulario from "./componentes/Formulario";
import ListadoPersonajes from "./componentes/ListadoPersonajes";
import ContextoPersonajes from "./contextos/ContextoPersonajes";
import { personajes } from "./personajes";

function App() {
  const [listaPersonajes, setListaPersonajes] = useState(personajes);
  console.log(listaPersonajes);
  return (
    <ContextoPersonajes.Provider value={{ listaPersonajes, setListaPersonajes }}>
      <div className="container">
        <header className="cabecera row">
          <h1 className="col">Personajes de Los Simpsons</h1>
        </header>
        <section className="crear-personaje row">
          <Formulario />
        </section>
        <ListadoPersonajes />
      </div>
    </ContextoPersonajes.Provider>
  );
}

export default App;
