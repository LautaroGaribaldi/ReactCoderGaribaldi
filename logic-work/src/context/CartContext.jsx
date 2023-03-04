import { createContext, useContext, useState } from "react";


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)                  // para no generar muchas importaciones uso el contexto como funcion y la importo

export const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    const addCart = (newProduct) => {
        const repeatedId = cartList.findIndex(product => product.id === newProduct.id)
        if (repeatedId !== -1) {
            cartList[repeatedId].cantidad += newProduct.cantidad
            setCartList([...cartList])
        } else {
            setCartList([
                ...cartList,                                                    // spread operator para agregar a mi array cartList el newProducto
                newProduct
            ])
        }
    }
    const totalAmount = () => {
        return (cartList.reduce((accum, product) => accum + product.cantidad, 0))
    }
    const fullPrice = () => {
        return (cartList.reduce((accum, product) => accum + (product.precio * product.cantidad), 0))
    }

    const removeProduct = (id) => {
        setCartList(cartList.filter(product => product.id !== id))
    }
    // Funcion para manejar suma o resta de cantidad de producto en el carrito (gracias a la variable cantidad puedo definir pasandole 1 o -1 si la funcion resta o suma.)
    const changeAmount = (id, amount) => {
        const indexProduct = cartList.findIndex(product => product.id === id) // busco el producto en mi carrito por su id y extraigo su index
        if (amount < 0 && cartList[indexProduct].cantidad == 1) {                // condicion para que si la cantidad baja a 0 lo borre de mi carrito
            removeProduct(id)
        } else {
            if (amount > 0 && cartList[indexProduct].stock > cartList[indexProduct].cantidad) {   // Condicion para que si suma cantidad nunca supere el stock de mi producto
                cartList[indexProduct].cantidad += amount
                setCartList([...cartList])
            } else if (amount < 0) {                                             // si resto y mi cantidad de producto no es 1 debo restar.
                cartList[indexProduct].cantidad += amount
                setCartList([...cartList])
            }
        }
    }

    const emptyCart = () => setCartList([])

    return (
        <CartContext.Provider value={{                                    // Valores y funciones a globalizar
            cartList,
            addCart,
            emptyCart,
            totalAmount,
            fullPrice,
            removeProduct,
            changeAmount
        }}>
            {children}
        </CartContext.Provider>
    )
}