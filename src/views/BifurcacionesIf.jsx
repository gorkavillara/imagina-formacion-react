import React from "react"
import Loading from "./Loading"

const BifurcacionesIf = () => {
  const cargando = false

  // if (cargando) {
  //   return <Loading />
  // } else {
  //   return <span>Aquí tienes tus datos</span>
  // }
  if (cargando) return <Loading />
  return <span>Aquí tienes tus datos</span>
}

export default BifurcacionesIf
