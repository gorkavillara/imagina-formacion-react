import axios from "axios"

jest.mock("axios")

test("Mockeando axios", async () => {
    const productos = [
        { id: 1, nombre: "Producto 1", precio: 10 },
        { id: 2, nombre: "Producto 2", precio: 20 },
        { id: 3, nombre: "Producto 3", precio: 30 },
    ]

    axios.get.mockResolvedValueOnce({ data: productos })

    const products = await axios.get("https://meloinvento.com")

    console.log(products)

    expect(products.data.length).toBe(3)
})