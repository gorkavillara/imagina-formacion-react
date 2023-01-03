import React from "react"

const OtherEvents = () => {
  const handleToggle = event => 
    console.log(event.target.open ? "Estoy abierto" : "Estoy cerrado")
  return (
    <details onToggle={handleToggle}>
      Hola estos son los detalles
    </details>
  )
}

export default OtherEvents
