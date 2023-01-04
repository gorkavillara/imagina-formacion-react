import React from "react"

const ListasEnReact = () => {
  const listaAlumnos = [
    { id: 1, nombre: "Gorka", nota: 10.0 },
    { id: 2, nombre: "María", nota: 6.8 },
    { id: 3, nombre: "Julen", nota: 7.9 },
    { id: 4, nombre: "Maddi", nota: 7.0 },
  ]
  return (
    <ul>
      {listaAlumnos.map((alumno) => (
        <li key={alumno.id}>
          {alumno.nombre} - {alumno.nota.toFixed(2)}
        </li>
      ))}
    </ul>
  )
}

export default ListasEnReact
