import React from 'react'
import './Header.css'
import { Search, ShoppingCart } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import { auth } from '../firebase'

function Header() {
    const [{ cart, user }, dispatch] = useStateValue()
    const handleAuth = () => {
        if (user) {
            auth.signOut()
        }
    }
    return (
        <div className="header">
            <Link to="/">
                <img
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt=""
                    className="header__logo"
                />
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <Search className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <Link to={!user && "/login"}> {/* only redirect if not logged in */}
                    <div onClick={handleAuth} className="header__option">
                        <span className="header__optionLineOne">
                            Hello {user ? user?.email : "Guest"}
                        </span>
                        <span className="header__optionLineTwo">
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
            </div>
            <Link to="/checkout">
                <div className="header__optionCart">
                    <ShoppingCart className="header__optionCartIcon" />
                    <span className="header__optionLineTwo header__cartCount">
                        {cart?.length}
                    </span>
                </div>
            </Link>
        </div>
    )
}

export default Header
