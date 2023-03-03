import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCartContext } from '../../context/CartContext'
import CartList from '../CartList/CartList';
import OrderForm from '../OrderForm/OrderForm';

const CartConteiner = () => {
    const [buy, setBuy] = useState(false)
    const { cartList, vaciarCarrito, precioTotal, eliminarProducto, cambiarCantidad } = useCartContext()

    const handleBuy = () => {
        setBuy(!buy)
    }

    //validarDatos()
    //console.log(validarDatos())
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