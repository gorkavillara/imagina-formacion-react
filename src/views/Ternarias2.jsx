import React from "react"
import Loading from "./Loading"

const Ternarias2 = () => {
  const cargando = true

  return (
    <div>
        {cargando 
          ? <Loading />
          : <p>Aquí tienes tu información</p>}
    </div>
  )
}

export default Ternarias2
