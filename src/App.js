import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <a href="https://google.com">Enlace a Google</a>
      <NavLink to="/home/prueba">Prueba</NavLink>
      <Routes>
        <Route path="/prueba" element={<h1>Soy la prueba</h1>} />
      </Routes>
    </div>
  );
}

export default App;
