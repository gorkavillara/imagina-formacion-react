import React from "react"

const PointerEvents = () => {
  return (
    <button onPointerDown={(e) => console.log("Has tocado este botón", e)}>
      Touch me
    </button>
  )
}

export default PointerEvents
