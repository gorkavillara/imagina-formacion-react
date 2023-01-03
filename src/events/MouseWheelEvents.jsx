import React from "react"

const MouseWheelEvents = () => {
  const handleWheel = (event) => {
    console.log(`Rueda girada: ${event.deltaY}`)
  }
  return (
    <div onWheel={handleWheel}>
      Gira la rueda del ratón para ver el valor de la propiedad deltaY.
    </div>
  )
}

export default MouseWheelEvents
