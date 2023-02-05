import "./App.css";
import Principal from "./components/Principal";
// import Contador from "./components/Contador";
// import ComponenteProps from "./components/ComponenteProps";
// import ComponenteClase from "./components/ComponenteClase";
// import ComponenteFuncional from "./components/ComponenteFuncional";

function App() {
  // const miElemento = (
  //   <p id="miElemento" className="claseDeMiElemento">
  //     Este es mi elemento
  //   </p>
  // );
  return (
    <div className="App">
      <Principal />
      {/* <Contador /> */}
      {/* {miElemento} */}
      {/* <ComponenteClase texto="Hola mundo!" /> */}
      {/* <ComponenteFuncional texto="Hola componente funcional" /> */}
      {/* <ComponenteProps
        titulo="Hola mundo"
        onClick={() => console.log("Hola mundo")}
      /> */}
    </div>
  );
}

export default App;
