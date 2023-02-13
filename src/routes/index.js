import { Navigate, Outlet } from "react-router-dom";
import App from "../App";
import DetalleProducto from "../components/DetalleProducto";
import Perfil from "../components/Perfil";
import PreguntasFrecuentes from "../components/PreguntasFrecuentes";
import NavegacionHistorial from "../components/NavegacionHistorial";
import Home from "../components/Home";
import ContactoNombre from "../components/ContactoNombre";

const color = "azul"

const rutaProtegida = (element) => {
    const estaAutenticado = true
    if (estaAutenticado) {
        return element
    } else {
        return <Navigate to="/" />
    }
}

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
        {
          path: "/home",
          element: <Home />,
        },
      ],
  },
  {
    path: "/contacto",
    element: <h2>Esta es la página de contacto</h2>
  },
  {
    path: "/productos/:idProducto",
    element: <DetalleProducto color={color} />
  },
  {
    path: "/preguntas",
    element: <PreguntasFrecuentes />
  },
  {
    path: "/perfil",
    element: rutaProtegida(<Perfil />),
    children: [
        {
          path: ":nombre",
          element: <ContactoNombre />,
        },
      ],
  },
  {
    path: "/navegacion",
    element: <NavegacionHistorial />
  }
];

export default routes;
