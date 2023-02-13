import { useNavigate } from "react-router-dom";

export default function PreguntasFrecuentes() {
  const redirigir = false

  const navigate = useNavigate()

  if (redirigir) 
    return navigate("/")
  
  return (
    <div>
      <h1>Preguntas frecuentes</h1>
    </div>
  );
}