export const Header = (props) => {
  const { counter, toggleMarcarTodos } = props;
  return (
    <header className="cabecera text-center py-2 row">
      <h1 className="col-12">Señores que te apuntan con el dedo</h1>
      <span className="col-12 mt-2">
        <span className="total">{counter}</span> señores que te apuntan con el
        dedo marcados
      </span>
      <a
        href="marcar-todos"
        className="marcar-todos col-2 offset-5 btn mt-2"
        onClick={toggleMarcarTodos}
      >
        Marcar todos
      </a>
    </header>
  );
};
