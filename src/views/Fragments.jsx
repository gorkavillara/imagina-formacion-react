import React from 'react'

const Componente1 = () => <><h1>Componente 1</h1><p>Texto del componente 1</p></>
const Componente2 = () => <><h1>Componente 2</h1><p>Texto del componente 2</p></>
const Componente3 = () => <><h1>Componente 3</h1><p>Texto del componente 3</p></>
const Componente4 = () => <><h1>Componente 4</h1><p>Texto del componente 4</p></>

const Fragments = () => {
  return (
    <>
        <Componente1 />
        <Componente2 />
        <Componente3 />
        <Componente4 />
    </>
  )
}

export default Fragments