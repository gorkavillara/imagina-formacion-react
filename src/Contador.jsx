import React, { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(1);
  const [nombre, setNombre] = useState("");
  const changeColor = e => {
    const red = Math.random() * 255;
    const blue = Math.random() * 255;
    const green = Math.random() * 255;
    e.target.style.color = `rgb(${red}, ${blue}, ${green})`
  }

  const cambiaNombre = event => {
    // Cambia la variable de estado nombre
    // al nombre introducido por el usuario

    setNombre(event.target.value)
  }

  const handleSubmit = event => {
    // IMPORTANTE: Debemos prevenir el comportamiento por defecto
    // de los formularios HTML para gestionarlos con React (y JS en general)
    event.preventDefault()

    // Aquí va la lógica para gestionar el evento
  }

  return (
    <div>
      <p>Valor: {contador}</p>
      <p onClick={changeColor} style={{ color: "red" }}>Doble del valor: {contador * 2}</p>
      <button onClick={() => setContador((valorAnterior) => valorAnterior + 1)}>
        +
      </button>
      <form onSubmit={handleSubmit}>
        <input onChange={cambiaNombre} type="text" value={nombre} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contador;
