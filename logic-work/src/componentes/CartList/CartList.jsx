import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

const CartList = ({ handleBuy }) => {

    const { cartList, vaciarCarrito, precioTotal, eliminarProducto, cambiarCantidad } = useCartContext()

    return (
        <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", alignItems: "center" }}>
            {cartList.length == 0 ?
                <>
                    <p>Carrito Vacio</p>
                    <Link to="/">
                        <button className='btn btn-outline-primary'>Volver a la tienda</button>
                    </Link>
                </>
                :
                <>
                    {cartList.map(producto => (
                        <div key={producto.id} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center" }}>
                            <img src={producto.imagen} alt="imagen producto" style={{ width: "100px" }} />
                            <p style={{ marginLeft: "10px", marginRight: "10px" }}> - {producto.nombre}</p>
                            <p style={{ marginLeft: "10px", marginRight: "10px" }}> - ${producto.precio}</p>
                            <button className='btn btn-outline-primary' onClick={() => cambiarCantidad(producto.id, -1)}>-</button>
                            <p style={{ marginLeft: "10px", marginRight: "10px" }}>cantidad: {producto.cantidad}</p>
                            <button className='btn btn-outline-primary' onClick={() => cambiarCantidad(producto.id, 1)}>+</button>
                            <button className='btn btn-outline-danger' onClick={() => eliminarProducto(producto.id)}>x</button>
                        </div>
                    ))}
                    <p>TOTAL: ${precioTotal()}</p>
                    <button className='btn btn-outline-danger' onClick={vaciarCarrito}>VACIAR CARRITO</button>
                    <button onClick={handleBuy}>Comprar</button>
                </>
            }
        </div>
    )
}

export default CartList