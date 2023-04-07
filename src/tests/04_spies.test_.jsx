// archivo 04_spies.test.jsx
import { fireEvent, render, screen } from "@testing-library/react"
import Boton from "../components/Boton"

test("Se lanza nuestro spy correctamente", () => {
    // Creamos nuestro spy con jest.fn()
    const miSpy = jest.fn()
    
    // Renderizamos el botón y le pasamos la función miSpy
    render(<Boton onClick={miSpy}>Hola mundo</Boton>)
    
    // Obtenemos la referencia al botón desde "lo que se ha renderizado"
    const button = screen.getByText("Hola mundo")
    
    // Simulamos un click sobre este botón
    fireEvent.click(button)

    // Utilizamos algunos expect con nuestro spy
    expect(miSpy).toBeCalled() // Esperamos que se haya ejecutado
    expect(miSpy).toBeCalledTimes(1) // Esperamos que se haya ejecutado 1 vez
})
