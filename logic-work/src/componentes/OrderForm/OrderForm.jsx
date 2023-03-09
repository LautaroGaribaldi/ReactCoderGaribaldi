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
    const { cartList, emptyCart, fullPrice } = useCartContext()

    const MySwal = withReactContent(Swal)

    const addOrder = (evt) => {
        evt.preventDefault()
        const order = {}
        let idOrder = "vacio"
        //validar datos de formData
        if (validateData()[0]) {
            const dateOrder = new Date()
            order.buyer = formData
            order.items = cartList.map(({ id, nombre, precio, cantidad }) => ({ id, nombre, precio, cantidad }))
            order.total = fullPrice()
            order.date = {
                dia: `${dateOrder.getDate()}/${(dateOrder.getMonth() + 1)}/${dateOrder.getFullYear()}`,
                hora: `${dateOrder.getHours() < 10 ? "0" : ""}${dateOrder.getHours()}:${dateOrder.getMinutes() < 10 ? "0" : ""}${dateOrder.getMinutes()}`
            }
            //`${dateOrder.getDate()}/${dateOrder.getMonth()}/${dateOrder.getFullYear()} - ${dateOrder.getHours()}:${dateOrder.getMinutes()}`

            const db = getFirestore()
            const ordersCollection = collection(db, "orders")
            addDoc(ordersCollection, order)
                .then(resp => idOrder = resp.id)
                .then(resp => MySwal.fire({
                    title: <p>Gracias por su compra!</p>,
                    html: <i>{`Su id de compra es: ${idOrder}`}</i>,
                    icon: "success"
                }))
                .then(emptyCart())
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
            toast.error(validateData()[1]);
        }

    }

    const handleOnChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }

    const validateData = () => {
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
            <h2 style={{ marginBottom: "20px" }}>Completa tu orden:</h2>
            <form onSubmit={addOrder} style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px", maxWidth: "500px", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
                <label htmlFor="nombre" style={{ marginBottom: "10px" }}>Nombre:</label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder='Ingrese su nombre'
                    onChange={handleOnChange}
                    value={formData.nombre}
                    style={{ borderColor: (formData.nombre === "") ? "red" : "black", padding: "10px", borderRadius: "5px", marginBottom: "20px", width: "100%", boxSizing: "border-box" }}
                    required
                />

                <label htmlFor="telefono" style={{ marginBottom: "10px" }}>Teléfono:</label>
                <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    placeholder='Ingrese su teléfono'
                    onChange={handleOnChange}
                    value={formData.telefono}
                    style={{ borderColor: (formData.telefono === "") ? "red" : "black", padding: "10px", borderRadius: "5px", marginBottom: "20px", width: "100%", boxSizing: "border-box" }}
                    required
                />

                <label htmlFor="email" style={{ marginBottom: "10px" }}>Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder='Ingrese su email'
                    onChange={handleOnChange}
                    value={formData.email}
                    style={{ borderColor: (formData.email === "" || formData.email !== formData.repetirEmail) ? "red" : "black", padding: "10px", borderRadius: "5px", marginBottom: "20px", width: "100%", boxSizing: "border-box" }}
                    required
                />

                <label htmlFor="repetirEmail" style={{ marginBottom: "10px" }}>Repite tu email:</label>
                <input
                    type="email"
                    id="repetirEmail"
                    name="repetirEmail"
                    placeholder='Repetir email'
                    onChange={handleOnChange}
                    value={formData.repetirEmail}
                    style={{ borderColor: (formData.repetirEmail === "" || formData.email !== formData.repetirEmail) ? "red" : "black", padding: "10px", borderRadius: "5px", marginBottom: "20px", width: "100%", boxSizing: "border-box" }}
                    required
                />

                <button className='btn btn-outline-success' type='submit' style={{ marginTop: "20px", padding: "10px", borderRadius: "5px", fontWeight: "bold" }}>Generar orden</button>
            </form>
        </div>
    )
}

export default OrderForm