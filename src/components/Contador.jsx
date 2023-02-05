import { useState } from "react"

function Contador() {
    const [contador, setContador] = useState(0)
    // let contador = 0

    const incrementaContador = () => {
        // contador++
        // setContador(contador + 1)
        setContador(anterior => anterior + 1)
        // console.log({ contador })
    }
    return (
        <div>
            <span>Valor: { contador }</span>
            <button onClick={incrementaContador}>+</button>
        </div>
    )
}

export default Contador