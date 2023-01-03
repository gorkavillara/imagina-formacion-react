import React from 'react'

const Componente1 = () => <div><h1>Componente 1</h1><p>Texto del componente 1</p></div>
const Componente2 = () => <div><h1>Componente 2</h1><p>Texto del componente 2</p></div>
const Componente3 = () => <div><h1>Componente 3</h1><p>Texto del componente 3</p></div>
const Componente4 = () => <div><h1>Componente 4</h1><p>Texto del componente 4</p></div>

const DivsInnecesarios = () => {
  return (
    <div>
        <Componente1 />
        <Componente2 />
        <Componente3 />
        <Componente4 />
    </div>
  )
}

export default DivsInnecesarios