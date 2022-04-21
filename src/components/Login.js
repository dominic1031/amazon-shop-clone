import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase.js'

function Login() {
    const navigate = useNavigate() // allows for url change
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const signIn = (e) => {
        e.preventDefault() // prevents page from refreshing
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                navigate('/')
            })
            .catch((error) => alert(error.message))
    }
    const register = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // succesfully created new user w/ email/password
                console.log(auth)
            })
            .catch((error) => alert(error.message))
        // if auth is success, then redirect to homepage
        if (auth) {
            navigate('/')
        }
    }
    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        onClick={signIn}
                        type="submit"
                        className="login__signInButton"
                    >
                        Sign In
                    </button>
                </form>
                <p>
                    By continuing, you agree to Amazon's Conditions of Use and
                    Privacy Notice.
                </p>
                <button onClick={register} className="login__registerButton">
                    Create your Amazon Account
                </button>
            </div>
        </div>
    )
}

export default Login
