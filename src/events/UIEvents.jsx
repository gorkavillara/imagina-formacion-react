import React from "react"

const UIEvents = () => {
  const handleScroll = (event) => {
    console.log(`Posición de desplazamiento: ${event.target.scrollTop}`)
  }
  const miLista = Array.from({length: 50}, () => 0);
  return (
    <div style={{ height: "200px", overflow: "scroll" }} onScroll={handleScroll}>
      <ul>
        {miLista.map((elem, i) => <li key={i}>Elemento {i + 1}</li>)}
      </ul>
    </div>
  )
}

export default UIEvents
