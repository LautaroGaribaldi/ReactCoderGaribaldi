import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { Cart } from '../Icons/Cart'

const CartWidget = () => {
    const { cantidadTotal } = useCartContext()
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none" }}>
            <Cart />
            <span id='cardWidget' style={(cantidadTotal() !== 0) ? { opacity: "100%" } : { opacity: "0%" }}>{cantidadTotal()}</span>
        </div>
    )
}

export default CartWidget