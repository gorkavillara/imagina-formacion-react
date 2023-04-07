test("Testeando con spies", () => {
    // Creamos nuestro spy con jest.fn()
    const miSpy = jest.fn()
    // Lanzamos la función
    miSpy()

    // Utilizamos algunos expect con nuestro spy
    expect(miSpy).toBeCalled() // Esperamos que se haya ejecutado
    expect(miSpy).toBeCalledTimes(1) // Esperamos que se haya ejecutado 1 vez
})