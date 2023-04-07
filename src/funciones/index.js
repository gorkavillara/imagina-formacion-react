// Archivo con las funciones
import axios from "axios";

export function getApiData() {
  return axios.get("https://ejemplo-api.com/data").then((response) => {
    return response.data;
  });
}

export function processData(data) {
  // Lógica para procesar los datos
  return data.toUpperCase();
}
