import React, { useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useCartContext } from '../../context/CartContext'

const OrderForm = ({ handleBuy }) => {
    const [formData, setFormData] = useState({
        nombre: "",
        telefono: "",
        email: "",
        repetirEmail: ""
    })
    const { cartList, vaciarCarrito, precioTotal } = useCartContext()

    const MySwal = withReactContent(Swal)

    const agregarOrden = (evt) => {
        evt.preventDefault()
        const order = {}
        let idOrder = "vacio"
        //validar datos de formData
        if (validarDatos()[0]) {
            order.buyer = formData
            order.items = cartList.map(({ id, nombre, precio, cantidad }) => ({ id, nombre, precio, cantidad }))
            order.total = precioTotal()

            const db = getFirestore()
            const ordersCollection = collection(db, "orders")
            addDoc(ordersCollection, order)
                .then(resp => idOrder = resp.id)
                .then(resp => MySwal.fire({
                    title: <p>Gracias por su compra!</p>,
                    html: <i>{`Su id de compra es: ${idOrder}`}</i>,
                    icon: "success"
                }))
                .then(console.log(idOrder))
                .then(vaciarCarrito())
                .catch(err => console.log(err))
                .finally(() =>
                    setFormData({
                        nombre: "",
                        telefono: "",
                        email: "",
                        repetirEmail: ""
                    }),
                    handleBuy()
                )
        } else {
            toast.error(validarDatos()[1]);
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
            mensaje = "Error! Verifica que los campos no esten vacios!"
            correcto = false
        } else {
            if (formData.email != formData.repetirEmail) {
                mensaje = "Los email no coinciden."
                correcto = false
            } else {
                mensaje = "Todos los datos son correctos"
                correcto = true
            }
        }
        return ([correcto, mensaje])
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
            <p>Completa tu orden:</p>
            <form onSubmit={agregarOrden} style={{ marginTop: "10px", display: "flex", flexDirection: "column", flexWrap: "wrap", alignItems: "center" }}>
                <p>Ingresa tu nombre:</p>
                <input
                    type="text"
                    name="nombre"
                    placeholder='Ingrese su nombre'
                    onChange={handleOnChange}
                    value={formData.nombre}
                    style={{ borderColor: (formData.nombre == "") ? "red" : "black   " }}
                /><br />
                <p>Ingresa tu telefono:</p>
                <input
                    type="text"
                    name="telefono"
                    placeholder='Ingrese su telefono'
                    onChange={handleOnChange}
                    value={formData.telefono}
                    style={{ borderColor: (formData.telefono == "") ? "red" : "black   " }}
                /><br />
                <p>Ingresa tu email:</p>
                <input
                    type="text"
                    name="email"
                    placeholder='Ingrese su email'
                    onChange={handleOnChange}
                    value={formData.email}
                    style={{ borderColor: (formData.email == "" || formData.email != formData.repetirEmail) ? "red" : "black   " }}
                /><br />
                <p>repite tu email:</p>
                <input
                    type="text"
                    name="repetirEmail"
                    placeholder='Repetir email'
                    onChange={handleOnChange}
                    value={formData.repetirEmail}
                    style={{ borderColor: (formData.repetirEmail == "" || formData.email != formData.repetirEmail) ? "red" : "black   " }}
                /><br />
                <button className='btn btn-outline-success' type='submit'>Generar orden</button>
            </form>
        </div>
    )
}

export default OrderForm