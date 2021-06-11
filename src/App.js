import { Card } from "./componentes/Card";
import { Header } from "./componentes/Header";
import { senyoresAPI } from "./senyores";

function App() {
  const senyores = senyoresAPI;
  console.log(senyores);
  return (
    <div className="contenedor-general container-xl">
      <Header />
      <main className="principal mt-2 row">
        {senyores.map((senyor) => (
          <Card senyor={senyor} key={senyor.id} />
        ))}
      </main>
    </div>
  );
}
export default App;
