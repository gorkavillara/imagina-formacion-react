import React, { useState } from "react"

const ConditionalClasses = () => {
  const [correcto, setCorrecto] = useState(true)
  return (
    <div>
      <p className={`${correcto ? "correcto" : "incorrecto"} doble`}>
        Esto es {correcto ? "Correcto" : "Incorrecto"}
      </p>
      <button onClick={() => setCorrecto((val) => !val)}>
        Cambia estado
      </button>
    </div>
  )
}

export default ConditionalClasses