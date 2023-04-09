import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment
      </button>
      <h4>Url: {process.env.REACT_APP_API_URL}</h4>
      <p>Entorno: {process.env.NODE_ENV}</p>
    </div>
  );
}

export default App;
