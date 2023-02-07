import React from "react"

const StyleAttribute = () => {
  return (
    <p style={ { 
      color: "green", 
      fontSize: "1.2rem",
      // font-size => fontSize
      fontWeight: "600"
    } }>
      He modificado el atributo 'style'
    </p>
  )
}

export default StyleAttribute
