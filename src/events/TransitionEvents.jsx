import React, { useRef } from "react"

const TransitionEvents = () => {
  const pRef = useRef(null)
  const handleScale = () => {
    pRef.current.classList.add("doble")
  }
  return (
    <div>
      <p
        className="texto"
        ref={pRef}
        onTransitionEnd={() => console.log("La transición ha terminado")}
      >
        Este es el texto a escalar
      </p>
      <button onClick={handleScale}>Escala el texto</button>
    </div>
  )
}

export default TransitionEvents
