import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Header />
                                <Home />
                            </>
                        }
                    />
                    <Route path="/checkout" element={<h1>CHECKOUT</h1>} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
