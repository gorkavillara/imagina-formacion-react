// archivo 04_Boton.test.jsx
import { render, screen, fireEvent } from "@testing-library/react"
import Boton from "../components/Boton"

test("Renderiza correctamente", () => {
  const miSpy = jest.fn()
  
  render(<Boton onClick={miSpy}>Hola mundo</Boton>)

  const miBoton = screen.getByText("Hola mundo")

  fireEvent.click(miBoton)

  expect(miSpy).toBeCalledTimes(1)
})
