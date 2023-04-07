// archivo 04_Boton.test.jsx
import { render } from "@testing-library/react"
import Boton from "../components/Boton"

test("Renderiza correctamente", () => {
  render(<Boton>Hola mundo</Boton>)
})
