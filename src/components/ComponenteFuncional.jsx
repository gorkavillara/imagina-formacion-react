import { useState } from "react";

const ComponenteFuncional = ({ texto }) => {
  const [nombre, setNombre] = useState("Leire")
  return (
    <div>
      <p>{texto}</p>
      <p>{nombre}</p>
    </div>
  );
};

export default ComponenteFuncional;
