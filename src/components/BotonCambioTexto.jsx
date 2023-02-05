import React from 'react'

const BotonCambioTexto = ({ setTexto }) => {
  const cambiaTexto = () => {
    // texto = "Otro texto"
    setTexto("Otro texto")
  }
  return (
    <button onClick={cambiaTexto}>Cambiar Texto</button>
  )
}

export default BotonCambioTexto