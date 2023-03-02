import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

const CartConteiner = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        telefono: "",
        email: "",
        repetirEmail: ""
    })
    const { cartList, vaciarCarrito, precioTotal, eliminarProducto, cambiarCantidad } = useCartContext()

    const agregarOrden = (evt) => {
        evt.preventDefault()
        const order = {}
        //validar datos de formData
        if (validarDatos()[0]) {
            order.buyer = formData
            order.items = cartList.map(({ id, nombre, precio, cantidad }) => ({ id, nombre, precio, cantidad }))
            order.total = precioTotal()
            console.log(order)

            const db = getFirestore()
            const ordersCollection = collection(db, "orders")
            addDoc(ordersCollection, order)
                .then(resp => console.log(resp))
                .catch(err => console.log(err))
                .finally(() => vaciarCarrito(),
                    setFormData({
                        nombre: "",
                        telefono: "",
                        email: "",
                        repetirEmail: ""
                    }))
        } else {
            console.log(validarDatos()[1])
        }

    }

    const handleOnChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }

    const validarDatos = () => {
        let correcto = false
        let mensaje = ""
        if (formData.nombre == "" || formData.telefono == "" || formData.email == "" || formData.repetirEmail == "") {
            console.log("error. campo vacio!")
            mensaje = "error. campo vacio!"
            correcto = false
        } else {
            if (formData.email != formData.repetirEmail) {
                console.log("los email no coinciden.")
                mensaje = "los email no coinciden."
                correcto = false
            } else {
                console.log("Todos los datos son correctos")
                mensaje = "Todos los datos son correctos"
                correcto = true
            }
        }
        return ([correcto, mensaje])
    }
    //validarDatos()
    //console.log(validarDatos())
    //console.log(formData)
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ minHeight: "500px", backgroundColor: "white", display: "flex", flexDirection: "column", alignItems: "center", minWidth: "50%", padding: "5px", borderRadius: "11px" }}>
                {cartList.length === 0 ?
                    <></>
                    :
                    cartList.map(producto => (
                        <div key={producto.id} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center" }}>
                            <img src={producto.imagen} alt="imagen producto" style={{ width: "100px" }} />
                            <p style={{ marginLeft: "10px", marginRight: "10px" }}> - {producto.nombre}</p>
                            <p style={{ marginLeft: "10px", marginRight: "10px" }}> - ${producto.precio}</p>
                            <button className='btn btn-outline-primary' onClick={() => cambiarCantidad(producto.id, -1)}>-</button>
                            <p style={{ marginLeft: "10px", marginRight: "10px" }}>cantidad: {producto.cantidad}</p>
                            <button className='btn btn-outline-primary' onClick={() => cambiarCantidad(producto.id, 1)}>+</button>
                            <button className='btn btn-outline-danger' onClick={() => eliminarProducto(producto.id)}>x</button>
                        </div>
                    ))
                }
                {cartList.length === 0 ?
                    <>
                        <p>Carrito Vacio</p>
                        <Link to="/">
                            <button className='btn btn-outline-primary'>Volver a la tienda</button>
                        </Link>
                    </>
                    :
                    <>
                        <p>TOTAL: ${precioTotal()}</p>
                        <button className='btn btn-outline-danger' onClick={vaciarCarrito}>VACIAR CARRITO</button>
                        <form onSubmit={agregarOrden} style={{ marginTop: "10px" }}>
                            <input
                                type="text"
                                name="nombre"
                                placeholder='Ingrese su nombre'
                                onChange={handleOnChange}
                                value={formData.nombre}
                                style={{ marginBottom: "5px", borderColor: (formData.nombre == "") ? "red" : "black   " }}
                            /><br />
                            <input
                                type="text"
                                name="telefono"
                                placeholder='Ingrese su telefono'
                                onChange={handleOnChange}
                                value={formData.telefono}
                                style={{ marginBottom: "5px", borderColor: (formData.telefono == "") ? "red" : "black   " }}
                            /><br />
                            <input
                                type="text"
                                name="email"
                                placeholder='Ingrese su email'
                                onChange={handleOnChange}
                                value={formData.email}
                                style={{ marginBottom: "5px", borderColor: (formData.email == "" || formData.email != formData.repetirEmail) ? "red" : "black   " }}
                            /><br />
                            <input
                                type="text"
                                name="repetirEmail"
                                placeholder='Repetir email'
                                onChange={handleOnChange}
                                value={formData.repetirEmail}
                                style={{ marginBottom: "5px", borderColor: (formData.repetirEmail == "" || formData.email != formData.repetirEmail) ? "red" : "black   " }}
                            /><br />
                            <button className='btn btn-outline-success' type='submit'>Generar orden</button>
                        </form>
                    </>
                }
            </div>
        </div>
    )
}

export default CartConteiner