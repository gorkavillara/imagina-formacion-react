import React, { useState } from "react";
import BotonCambioTexto from "./BotonCambioTexto";

const Principal = () => {
  const [texto, setTexto] = useState("Texto del componente Principal");
  return (
    <div>
      <p>{texto}</p>
      <BotonCambioTexto setTexto={setTexto} />
    </div>
  );
};

export default Principal;
