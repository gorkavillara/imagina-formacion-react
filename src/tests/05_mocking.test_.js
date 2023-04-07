import axios from "axios"

jest.mock("axios")

test("muestra la lista de productos", async () => {
    const productos = [
        { id: 1, nombre: "Producto 1", precio: 10 },
        { id: 2, nombre: "Producto 2", precio: 20 },
        { id: 3, nombre: "Producto 3", precio: 30 },
    ]

    axios.get.mockResolvedValueOnce({ data: productos })

    const items = await axios.get("https://api.midominio.com")

    expect(items.data.length).toBe(3)
})
