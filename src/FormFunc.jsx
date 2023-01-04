import React, { useState } from "react"

const FormFunc = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí desarrollamos toda la lógica del envío del formulario
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Tu nombre de usuario"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Tu contraseña"
      />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default FormFunc
