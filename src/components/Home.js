import React from 'react'
import './Home.css'
import Product from './Product'
import { nanoid } from 'nanoid'
import ImageSlider from '../components/ImageSlider/ImageSlider'
import NavFooter from './NavFooter'
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <ImageSlider />
                <div className="home__row">
                    <Product
                        id={nanoid()}
                        title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
                        price={299.99}
                        image="https://m.media-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg"
                        rating={5}
                    />
                    <Product
                        id={nanoid()}
                        title="BIC Xtra-Sparkle Mechanical Pencil, Medium Point (0.7 mm), 24-Count, Refillable Design for Long-Lasting Use"
                        price={6.68}
                        image="https://m.media-amazon.com/images/I/81NcHcP-bFL._AC_SY450_.jpg"
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id={nanoid()}
                        title="Beast Blender + Hydration System | Blend Smoothies and Shakes, Infuse Water, Kitchen Countertop Design, 1000W (Pebble Grey)"
                        price={`185.00`}
                        image="https://m.media-amazon.com/images/I/71N0XDtd5oS._AC_SL1500_.jpg"
                        rating={4}
                    />
                    <Product
                        id={nanoid()}
                        title="Spider-Man: No Way Home [DVD]"
                        price={17.96}
                        image="https://m.media-amazon.com/images/I/81rRxVXKjaL._SL1500_.jpg"
                        rating={5}
                    />
                    <Product
                        id={nanoid()}
                        title="Ray_Ban New Wayfarer Sunglasses (Matte Black Frame 55mm), Matte Black Frame Solid Black G15 Lens, 55 mm"
                        price={`151.00`}
                        image="https://m.media-amazon.com/images/I/51+TKek67sL._AC_UX395_.jpg"
                        rating={3}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id={nanoid()}
                        title="HP 600 G2 Desktop Computer PC, Intel i5, 16GB, 2TB, Windows 10 Pro, 24 LCD Monitor, Microsoft Office 365 Personal, New 16GB Flash Drive, RGB Keyboard & Mouse, WiFi, DVD (Renewed)"
                        price={556.87}
                        image="https://m.media-amazon.com/images/I/71lFFy+dvqL._AC_SL1500_.jpg"
                        rating={4}
                    />
                </div>
            </div>
            {/* <NavFooter /> */}
        </div>
    )
}

export default Home
