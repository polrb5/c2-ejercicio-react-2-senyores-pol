import { Card } from "./componentes/Card";
import { Header } from "./componentes/Header";
import { senyoresAPI } from "./senyores";

function App() {
  return (
    <div className="contenedor-general container-xl">
      <Header />
      <main className="principal mt-2 row">
        <Card />
      </main>
    </div>
  );
}
export default App;
