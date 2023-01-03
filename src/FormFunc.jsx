import React, { useRef } from "react"

const FormFunc = () => {
  const eventoPadre = () => {
    console.log("Has hecho clic en el padre")
  }
  const eventoHijo = (event) => {
    event.stopPropagation() // Sin este método se lanzaría también el evento padre
    console.log("Has hecho clic en el hijo")
  }

  return (
    <div onClick={eventoPadre}>
      <button onClick={eventoHijo}>Hijo</button>
    </div>
  )
}

export default FormFunc
