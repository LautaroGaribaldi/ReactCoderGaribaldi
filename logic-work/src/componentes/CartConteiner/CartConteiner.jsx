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
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minHeight: "500px" }}>
            <div style={{ minHeight: "500px", backgroundColor: "white", display: "flex", flexDirection: "column", alignItems: "center", minWidth: "70%", padding: "5px", borderRadius: "11px", marginTop: "100px", border: "#8e32d5", borderWidth: "10px", borderStyle: "solid", boxShadow: "12px 12px 19px 1px rgba(0,0,0,0.75)" }}>
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