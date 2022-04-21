import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct'
function Checkout() {
    const [{ cart }, dispatch] = useStateValue()

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />
                <div>
                    <h2 className="checkout__title">Your Shopping Cart</h2>
                    {/* <CheckoutProduct
                        id="1"
                        title="BIC-Xtra-Sparkle-Mechanical-Pencil, Medium Point(0.7 mm), 24-Count, Refillable Design for Long-Lasting Use"
                        price={19.99}
                        image="https://m.media-amazon.com/images/I/81NcHcP-bFL._AC_SY450_.jpg"
                        rating={5}
                    />
                    <CheckoutProduct
                        id="2"
                        title="BIC Xtra"
                        price={19.99}
                        image="https://m.media-amazon.com/images/I/81NcHcP-bFL._AC_SY450_.jpg"
                        rating={5}
                    /> */}
                    {cart.map((item) => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
