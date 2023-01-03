import React from 'react'

const CompositionEvents = () => {
  return (
    <form>
      <input type="text" onCompositionEnd={() => console.log("composición terminada")} />
    </form>
  )
}

export default CompositionEvents