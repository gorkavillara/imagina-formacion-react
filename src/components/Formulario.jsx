import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { create } from "../features/tareas/tareasSlice";

const Formulario = () => {
  const [nuevaTarea, setNuevaTarea] = useState("");
  const dispatch = useDispatch()
  const incluyeNuevaTarea = () => {
    dispatch(create(nuevaTarea))
  }
  return (
    <div>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
      />
      <button onClick={incluyeNuevaTarea}>Añadir</button>
    </div>
  );
};

export default Formulario;
