import React from 'react'

const FormEvents = () => {
  const handleSubmit = event => {
    event.preventDefault()
    console.log("Ahora voy a enviar los datos a una API externa")
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default FormEvents