import React from 'react'
import './Header.css'
import { Search, ShoppingCart } from '@mui/icons-material'

function Header() {
    return (
        <div className="header">
            <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt=""
                className="header__logo"
            />
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <Search className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Hello, Sign in
                    </span>
                    <span className="header__optionLineTwo">
                        Account & Lists
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
            </div>
            <div className="header__optionCart">
                <ShoppingCart className="header__optionCartIcon" />
                <span className="header__optionLineTwo header__cartCount">0</span>
            </div>
        </div>
    )
}

export default Header
