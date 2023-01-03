import React from "react"

const DobleAnd = () => {
  const error = "Ha ocurrido un error"
  return (
    <div>
      <p>El servidor ha retornado un valor</p>
      {error && <span style={{ color: "red" }}>ERROR: {error}</span>}
    </div>
  )
}

export default DobleAnd
