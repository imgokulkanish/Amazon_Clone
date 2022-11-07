import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import "./Login.css"
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate()
    const [input, setInput] = useState({
        email: "",
        password: ""
    })
    const handleChange = (event) => {
        event.preventDefault()
        const input_name = event.target.name
        const input_value = event.target.value
        setInput({ ...input, [input_name]: input_value })
    }
    const login = (event) => {
        event.preventDefault()
        auth.signInWithEmailAndPassword(input.email, input.password)
            .then(() => {
                navigate('/')
            })
            .catch((err) => {
                alert(err)
            })
    }
    const register = (event) => {
        event.preventDefault()
        auth.createUserWithEmailAndPassword(input.email, input.password)
            .then((authUser) => {
                console.log(authUser)
                alert("User Account Created")
            })
            .catch((err) => {
                console.log(err)
                alert(err)
            })
    }
    return (
        <div className="login">
            <NavLink to="/" className="header__link">
                <img className="header__logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROBZsOV_lhvC7eymRovQqQ4bbxGVZ_JfgBWA&usqp=CAU" alt="logo" />
            </NavLink>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email" name="email" onChange={(event) => handleChange(event)} />
                    <h5>Password</h5>
                    <input type="password" name="password" onChange={(event) => handleChange(event)} />
                    <button type="submit" className="login__signInButton" style={{ cursor: "pointer" }} onClick={login}>
                        Sign In
                    </button>
                </form>
                <p>
                    By Signing in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy policy, our Cookies policy and our Internet based ad notice
                </p>
                <button className="login_registerButton" type="submit" onClick={register} style={{ cursor: "pointer" }}>
                    Create your Amazon Account
                </button>
            </div>
        </div>
    )
}

export default Login