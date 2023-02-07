import React from "react"
import MisEstilos from "./MisEstilos.module.css"

const ScopedCSS = () => {
  return (
    <div className={`${MisEstilos.rojo} ${MisEstilos.oscuro}`}>
      ScopedCSS
    </div>
  )
}

export default ScopedCSS
