import React from 'react'
import { Cart } from '../Icons/Cart'

const CartWidget = () => {
  return (
    <div>
        <Cart />
        <span id='cardWidget'>0</span>
    </div>
  )
}

export default CartWidget