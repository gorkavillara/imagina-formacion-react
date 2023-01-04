import React, { useState } from "react"

const ConditionalClasses = ({ className }) => {
  return (
    <div>
      <p className={className}>
        Estas son las clases que nos llegan de props
      </p>
    </div>
  )
}

export default ConditionalClasses