import React from 'react'
import styled from "styled-components"

const MiBotonEstilizado = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: rgb(255, 99, 71);
  color: white;
  border: solid 2px rgb(208, 73, 49);
  cursor: pointer;
`

const StyledComponents = () => {
  return (
    <div>
      <MiBotonEstilizado>Mi botón</MiBotonEstilizado>
    </div>
  )
}

export default StyledComponents