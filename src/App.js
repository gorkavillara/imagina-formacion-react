import React from 'react'

function App() {
  
  const apiUrl = process.env.REACT_APP_API_URL

  return (
    <div>
      <p>La URL de la API es: {apiUrl}</p>
    </div>
  )
}

export default App
