import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

const CartList = ({ handleBuy }) => {

    const { cartList, emptyCart, fullPrice, removeProduct, changeAmount } = useCartContext()

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
                    {cartList.map(product => (
                        <div key={product.id} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", padding: "5px", marginBottom: "5px", border: "rgb(73, 79, 84)", borderWidth: "5px", borderStyle: "solid", borderRadius: "15px" }}>
                            <img src={product.imagen} alt="imagen producto" style={{ width: "100px" }} />
                            <p style={{ marginLeft: "10px", marginRight: "10px", width: "20rem" }}> - {product.nombre}</p>
                            <p style={{ marginLeft: "10px", marginRight: "10px" }}> - ${product.precio}</p>
                            <button className='btn btn-outline-primary' onClick={() => changeAmount(product.id, -1)}>-</button>
                            <p style={{ marginLeft: "10px", marginRight: "10px" }}>cantidad: {product.cantidad}</p>
                            <button style={{ marginRight: "30px" }} className='btn btn-outline-primary' onClick={() => changeAmount(product.id, 1)}>+</button>
                            <button className='btn btn-outline-danger' onClick={() => removeProduct(product.id)}>x</button>
                        </div>
                    ))}
                    <p>TOTAL: ${fullPrice()}</p>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <button onClick={handleBuy} className='btn btn-outline-success' style={{ marginRight: "10px" }} >Comprar</button>
                        <button className='btn btn-outline-danger' onClick={emptyCart}>VACIAR CARRITO</button>
                    </div>
                </>
            }
        </div>
    )
}

export default CartList