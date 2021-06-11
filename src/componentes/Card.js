export const Card = (props) => {
  const { senyor } = props;
  return (
    <article className="senyor senyor-molde col-8 offset-2 mb-4">
      <div className="row">
        <div className="avatar col">
          <img
            src={`img/${senyor.foto}`}
            className="img-fluid rounded-circle"
            width="214"
            alt=""
          />
          <span className="inicial text-center rounded-circle"></span>
        </div>
        <div className="info col">
          <h2 className="nombre-senyor">{senyor.nombre}</h2>
          <ul className="datos list-unstyled mt-2">
            <li className="datos-profesion row">
              <span className="nombre-dato col-4">Profesión:</span>
              <span className="valor-dato col"></span>
            </li>
            <li className="datos-estado row">
              <span className="nombre-dato col-4">Estado:</span>
              <span className="valor-dato col"></span>
            </li>
            <li className="datos-twitter row">
              <span className="nombre-dato col-4">Twitter:</span>
              <span className="valor-dato col"></span>
            </li>
          </ul>
        </div>
      </div>
      <i className="icono fas fa-check"></i>
    </article>
  );
};
