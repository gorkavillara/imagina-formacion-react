import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const tareasSlice = createSlice({
  name: "tareas",
  initialState,
  reducers: {
    create: (state, action) => {
      state.value = [
        ...state.value,
        { texto: action.payload, completado: false },
      ];
    },
    toggleComplete: (state, action) => {
      state.value[action.payload].completado = !state.value[action.payload].completado
    },
    deleteTask: (state, action) => {
      state.value.splice(action.payload, 1)
    }
  },
});

// Action creators are generated for each case reducer function
export const { create, toggleComplete, deleteTask } = tareasSlice.actions;

export default tareasSlice.reducer;
