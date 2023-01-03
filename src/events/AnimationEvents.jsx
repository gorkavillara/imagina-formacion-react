import React from "react"

const AnimationEvents = () => {
  return (
    <div
      className="animated-text"
      onAnimationEnd={() => console.log("Animación terminada")}
    >
      Texto animado
    </div>
  )
}

export default AnimationEvents
