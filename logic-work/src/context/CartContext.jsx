import { createContext, useContext, useState } from "react";


const CartContext = createContext([])

export const useCartContext = ()=> useContext(CartContext)                  // para no generar muchas importaciones uso el contexto como funcion y la importo

export const CartContextProvider = ({children})=>{

    const [cartList, setCartList] = useState([])
    
    const agregarCarrito = (newProducto)=>{
        const idRepetido = cartList.findIndex(producto => producto.id === newProducto.id)
        if(idRepetido !== -1){
            cartList[idRepetido].cantidad += newProducto.cantidad
            setCartList([...cartList])
        } else{
            setCartList([
                ...cartList,                                                    // spread operator para agregar a mi array cartList el newProducto
                newProducto
            ])
        }
    }
    const cantidadTotal = ()=>{
        return (cartList.reduce((acumulador,producto) => acumulador + producto.cantidad,0))
    }
    const precioTotal = ()=>{
        return (cartList.reduce((acumulador,producto) => acumulador + (producto.precio * producto.cantidad),0))
    }

    const eliminarProducto = (id) =>{
        setCartList(cartList.filter(producto => producto.id !== id))
    }

    const vaciarCarrito = () => setCartList([])

    return(
        <CartContext.Provider value ={{                                    // Valores y funciones a globalizar
            cartList,
            agregarCarrito,
            vaciarCarrito,
            cantidadTotal,
            precioTotal,
            eliminarProducto
        }}>
            {children}
        </CartContext.Provider>
    )
}