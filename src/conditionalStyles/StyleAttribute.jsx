import React, { useState } from "react"

const StyleAttribute = () => {
  const [correcto, setCorrecto] = useState(true)
  return (
    <>
      <p style={{ color: correcto ? "green" : "red", fontSize: "1.2rem" }}>
        Esto es {correcto ? "Correcto" : "Incorrecto"}
      </p>
      <button onClick={() => setCorrecto((val) => !val)}>
        Cambia estado
      </button>
    </>
  )
}

export default StyleAttribute
