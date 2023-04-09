import React, { createContext } from 'react';
import axios from "axios"
import ComponenteHijo from './ComponenteHijo';

// Define un objeto de contexto
export const MiContexto = createContext();

const fetchUsers = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users")
  console.log("Usuarios", res.data)
}

const ComponentePadre = () => {
  // Define los datos que se desea compartir
  const datos = { nombre: 'Gorka', edad: 35, fetchUsers };

  // Pasa los datos al proveedor de contexto
  return (
    <MiContexto.Provider value={datos}>
      <ComponenteHijo />
    </MiContexto.Provider>
  );
}

export default ComponentePadre