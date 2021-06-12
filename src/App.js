import { useState } from "react";
import { Card } from "./componentes/Card";
import { Header } from "./componentes/Header";
import { senyoresAPI } from "./senyores";

function App() {
  let senyores = [...senyoresAPI];
  const [counter, setCounter] = useState(0);
  const [marcarTodos, setMarcarTodos] = useState(false);

  const toggleMarcarTodos = () => {
    setMarcarTodos(!marcarTodos);
  };
  const senyoresMarcados = () => {
    if (senyores.senyor.marcado) {
      setCounter(counter + 1);
    } else if (!senyores.senyor.marcado) {
      setCounter(counter - 1);
    }
  };
  return (
    <div className="contenedor-general container-xl">
      <Header
        senyores={senyores}
        counter={counter}
        toggleMarcarTodos={toggleMarcarTodos}
      />
      <main className="principal mt-2 row">
        {senyores.map((senyor) => (
          <Card
            senyor={senyor}
            key={senyor.id}
            senyoresMarcados={senyoresMarcados}
            onClick={senyoresMarcados}
          />
        ))}
      </main>
    </div>
  );
}
export default App;
