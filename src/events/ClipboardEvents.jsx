import React from "react"

const ClipboardEvents = () => {
  return (
    <div onCopy={() => alert("Te he dicho que no copies el texto 😡")}>
      <h1>No copies este texto!</h1>
    </div>
  )
}

export default ClipboardEvents
