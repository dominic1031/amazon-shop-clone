import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    src="https://m.media-amazon.com/images/I/61MyQlu87AL._SX3000_.jpg"
                    alt=""
                    className="home__image"
                />
                <div className="home__row">
                    <Product
                        id="1"
                        title="BIC Xtra"
                        price={19.99}
                        image="https://m.media-amazon.com/images/I/81NcHcP-bFL._AC_SY450_.jpg"
                        rating={5}
                    />
                    <Product
                        id="1"
                        title="BIC Xtra-Sparkle Mechanical Pencil, Medium Point (0.7 mm), 24-Count, Refillable Design for Long-Lasting Use"
                        price={19.99}
                        image="https://m.media-amazon.com/images/I/81NcHcP-bFL._AC_SY450_.jpg"
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="1"
                        title="BIC Xtra-Sparkle Mechanical Pencil, Medium Point (0.7 mm), 24-Count, Refillable Design for Long-Lasting Use"
                        price={19.99}
                        image="https://m.media-amazon.com/images/I/81NcHcP-bFL._AC_SY450_.jpg"
                        rating={5}
                    />
                    <Product
                        id="1"
                        title="BIC Xtra-Sparkle Mechanical Pencil, Medium Point (0.7 mm), 24-Count, Refillable Design for Long-Lasting Use"
                        price={19.99}
                        image="https://m.media-amazon.com/images/I/81NcHcP-bFL._AC_SY450_.jpg"
                        rating={5}
                    />
                    <Product
                        id="1"
                        title="BIC Xtra-Sparkle Mechanical Pencil, Medium Point (0.7 mm), 24-Count, Refillable Design for Long-Lasting Use"
                        price={19.99}
                        image="https://m.media-amazon.com/images/I/81NcHcP-bFL._AC_SY450_.jpg"
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="1"
                        title="BIC Xtra-Sparkle Mechanical Pencil, Medium Point (0.7 mm), 24-Count, Refillable Design for Long-Lasting Use"
                        price={19.99}
                        image="https://m.media-amazon.com/images/I/81NcHcP-bFL._AC_SY450_.jpg"
                        rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
