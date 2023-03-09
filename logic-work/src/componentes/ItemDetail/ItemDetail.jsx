import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';

const InputCount = () => {
    return (
        <div style={{ display: "flex" }}>
            <Link to="/cart">
                <button className='btn btn-outline-primary'>Ir al carrito de compras</button>
            </Link>
            <Link to="/">
                <button className='btn btn-outline-primary'>Seguir comprando</button>
            </Link>
        </div>
    )
}

const ItemDetail = ({ product }) => {
    const { nombre, descripcion, precio, imagen, stock } = product;
    const [isCount, setIsCount] = useState(true)              // genero el estado de mi boton para poder cambiarlo al apretar comprar.

    const { addCart } = useCartContext()                // del contextto CartContext extraigo solamente la funcion addCart.

    const onAdd = (cant) => {                                              // Funcion agregar productos al carrito.
        addCart({ ...product, cantidad: cant })                      // spread operator para agregar a mi producto la propiedad cantidad, su valor y agregarlo a mi array.
        setIsCount(false)                                                  // Modifico que botones muestro.

    }

    return (
        <div style={{ backgroundColor: "white", width: "50vw", minWidth: "17rem", marginTop: "100px", display: "flex", flexDirection: "column", flexWrap: "wrap", alignItems: "center", border: "#8e32d5", borderWidth: "10px", borderStyle: "solid", boxShadow: "12px 12px 19px 1px rgba(0,0,0,0.75)" }}>
            <img src={imagen} alt="Imagen producto" style={{ width: '15rem', textAlign: "center", margin: "auto" }} />
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <span style={{ marginBottom: "10px" }}>Precio: ${precio}</span>
            {
                isCount ?
                    <ItemCount initial={1} stock={stock} onAdd={onAdd} />
                    :
                    <InputCount />
            }
        </div>
    )
}

export default ItemDetail