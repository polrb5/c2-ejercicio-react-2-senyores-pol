import { useState } from "react";

export const Card = (props) => {
  const { senyor } = props;
  const getInicial = (nombre) => {
    const partesNombre = nombre.split(" ");
    const posicion = partesNombre[0].length > 2 ? 0 : 1;
    return partesNombre[posicion].charAt(0).toUpperCase();
  };

  const marcarPersonajes = () => setPersonaje(!personaje);
  const [personaje, setPersonaje] = useState(senyor.marcado);

  return (
    <article
      className={`senyor senyor-molde${
        personaje ? " marcado" : ""
      } col-8 offset-2 mb-4`}
      onClick={marcarPersonajes}
    >
      <div className="row">
        <div className="avatar col">
          <img
            src={`img/${senyor.foto}`}
            className="img-fluid rounded-circle"
            width="214"
            alt={senyor.mensaje}
          />
          <span className="inicial text-center rounded-circle">
            {getInicial(senyor.nombre)}
          </span>
        </div>
        <div className="info col">
          <h2 className="nombre-senyor">{senyor.nombre}</h2>
          <ul className="datos list-unstyled mt-2">
            <li className="datos-profesion row">
              <span className="nombre-dato col-4">Profesión:</span>
              <span className="valor-dato col">{senyor.profesion}</span>
            </li>
            <li className="datos-estado row">
              <span className="nombre-dato col-4">Estado:</span>
              <span className="valor-dato col">{senyor.estado}</span>
            </li>
            <li className="datos-twitter row">
              <span className="nombre-dato col-4">Twitter:</span>
              <span className="valor-dato col">{senyor.twitter}</span>
            </li>
          </ul>
        </div>
      </div>
      <i className="icono fas fa-check"></i>
    </article>
  );
};
