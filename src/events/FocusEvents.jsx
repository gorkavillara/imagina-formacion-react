import React from 'react'

const FocusEvents = () => {
  return <input onFocus={() => console.log("Acabas de hacer foco en mí")} />
}

export default FocusEvents