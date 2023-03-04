import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import CartList from '../CartList/CartList';
import OrderForm from '../OrderForm/OrderForm';

const CartConteiner = () => {
    const [buy, setBuy] = useState(false)

    const handleBuy = () => {
        setBuy(!buy)
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ minHeight: "500px", backgroundColor: "white", display: "flex", flexDirection: "column", alignItems: "center", minWidth: "50%", padding: "5px", borderRadius: "11px" }}>
                {buy ?
                    <>
                        <OrderForm handleBuy={handleBuy} />
                    </>
                    :
                    <>
                        <CartList handleBuy={handleBuy} />
                    </>
                }
            </div>
        </div>
    )
}

export default CartConteiner