import React from "react"
import Loading from "./Loading"

const Ternarias2 = () => {
  const cargando = false

  return (
    <div>
      <p>
        {cargando 
          ? "Cargando..." 
          : "Aquí tienes tu información"}
      </p>
    </div>
  )
}

export default Ternarias2
