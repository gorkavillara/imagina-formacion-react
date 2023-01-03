import React from "react"
import Loading from "./Loading"

const Ternarias = () => {
  const cargando = true
  
  return cargando 
    ? <Loading /> 
    : <div>Aquí tienes tus datos</div>
}

export default Ternarias
