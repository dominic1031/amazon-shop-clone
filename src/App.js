import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Checkout from './components/Checkout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import { useEffect } from 'react'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
function App() {
    const [{}, dispatch] = useStateValue()
    useEffect(() => { 
        // listen to when a user logs in
        auth.onAuthStateChanged((authUser) => {
            console.log('The user is:', authUser)
            if (authUser) {
                // user is logged in
                dispatch({
                    type: 'SET_USER',
                    user: authUser,
                })
            } else {
                // user is not logged in
                dispatch({
                    type: 'SET_USER',
                    user: null,
                })
            }
        })
    }, [])

    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/login" element={<Login />} />

                    <Route
                        path="/checkout"
                        element={
                            <>
                                <Header />
                                <Checkout />
                            </>
                        }
                    />
                    <Route
                        path="/"
                        element={
                            <>
                                <Header />
                                <Home />
                            </>
                        }
                    />
                </Routes>
            </div>
        </Router>
    )
}

export default App
