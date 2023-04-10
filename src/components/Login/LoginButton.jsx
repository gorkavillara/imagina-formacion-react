import { useState } from "react"
import axios from "axios"

const LoginButton = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const login = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        // console.log(res.data)
        setLoggedIn(true)
    }
    return (
        <>
            <button name="Iniciar sesión" onClick={login}>Iniciar sesión</button>
            {loggedIn && (
                <span data-testid="pantalla-de-inicio">Pantalla de inicio</span>
            )}
        </>
    )
}

export default LoginButton
