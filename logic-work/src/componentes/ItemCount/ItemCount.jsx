import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

const ItemCount = ({ initial = 1, stock = 10, onAdd }) => {
    const [count, setCount] = useState(initial)
    const sum = () => {
        if (count < stock) {
            setCount(Number(count) + 1)
        }                        // funcion para amuentar la cantidad a pedir siempre que la cantidad sea igual o menor al stock
    }
    const subtract = () => {
        if (count > initial) {
            setCount(Number(count) - 1)                               // funcion para disminuir la cantidad a pedir siempre que cantidad sea mayor a 0
        }
    }

    const addCart = () => {
        onAdd(count)
    }

    return (
        <div style={{ marginBottom: "10px" }}>
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", marginBottom: "10px", alignItems: "center" }}>
                <button className={`btn btn-primary ${(stock !== 0) ? "" : "disabled"}`} onClick={sum} >
                    +
                </button>
                <label>{count}</label>
                <button className={`btn btn-primary ${(stock !== 0) ? "" : "disabled"}`} onClick={subtract}>
                    -
                </button>
            </div>
            <div>
                <Button style={{ marginBottom: "10px" }} variant="primary" className={(stock !== 0) ? "" : "disabled"} onClick={addCart}>
                    {stock === 0 ? "Sin stock" : "Agregar al carrito"}
                </Button>
            </div>
        </div>
    )
}

export default ItemCount