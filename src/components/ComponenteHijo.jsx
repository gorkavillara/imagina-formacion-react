import React, { useContext } from 'react';
import { MiContexto } from './ComponentePadre';

const ComponenteHijo = () => {
  // Recupera los datos del contexto utilizando useContext
  const { nombre, edad, fetchUsers } = useContext(MiContexto);

  // Utiliza los datos obtenidos
  return (
    <div>
      <p>Nombre: {nombre}</p>
      <p>Edad: {edad}</p>
      <button onClick={fetchUsers}>Fetch Users</button>
    </div>
  );
}

export default ComponenteHijo
