import React from "react"

const TouchEvents = () => {
  const handleTouchMove = (event) => {
    console.log(
      `Desplazamiento táctil: (${event.touches[0].clientX}, ${event.touches[0].clientY})`
    )
  }
  return (
    <div onTouchMove={handleTouchMove}>
      Arrastra tu dedo sobre la pantalla táctil para ver las coordenadas del
      desplazamiento.
    </div>
  )
}

export default TouchEvents
