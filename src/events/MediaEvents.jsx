import React from "react"

const MediaEvents = () => {
  const handlePlay = () => {
    console.log("Reproducción iniciada")
  }
  return (
    <video onPlay={handlePlay}>
      <source src="mi-video.mp4" type="video/mp4" />
    </video>
  )
}

export default MediaEvents
