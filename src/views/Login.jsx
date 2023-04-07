import React from "react"
import UserInput from "../components/Login/UserInput"
import LoginButton from "../components/Login/LoginButton"
import PasswordInput from "../components/Login/PasswordInput"

const Login = () => {
    return (
        <>
            <h1>Login</h1>
            <UserInput />
            <PasswordInput />
            <LoginButton />
        </>
    )
}

export default Login
