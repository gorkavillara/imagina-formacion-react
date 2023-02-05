import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleComplete, deleteTask } from "../features/tareas/tareasSlice";

const ListaTareas = () => {
  const tareas = useSelector((state) => state.tareas.value);
  const dispatch = useDispatch();
  const toggle = (index) => {
    dispatch(toggleComplete(index));
  };
  const delTask = (index) => {
    dispatch(deleteTask(index));
  };
  return (
    <div>
      {tareas.map((tarea, index) => (
        <div key={index}>
          <span style={{ textDecoration: tarea.completado ? "line-through" : "" }}>{tarea.texto}</span>
          <button onClick={() => toggle(index)}>
            Completar
          </button>
          <button onClick={() => delTask(index)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default ListaTareas;
