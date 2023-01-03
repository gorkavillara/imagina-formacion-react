import React from "react"
import Loading from "./Loading"

const BifurcacionesIf = () => {
  const cargando = true
  if (cargando) {
    return <Loading />
  } else {
    return <span>Aquí tienes tus datos</span>
  }
}

export default BifurcacionesIf
