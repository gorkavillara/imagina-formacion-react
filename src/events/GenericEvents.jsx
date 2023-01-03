import React from "react"

const GenericEvents = () => {
  const imageUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/250px-React.svg.png"

  const handleLoad = () =>
    console.log("La imagen se ha cargado satisfactoriamente")

  const handleError = (error) =>
    console.error("La imagen NO se ha podido cargar", error)

  return <img src={imageUrl} alt="" onLoad={handleLoad} onError={handleError} />
}

export default GenericEvents
