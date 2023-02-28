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
// Funcion para manejar suma o resta de cantidad de producto en el carrito (gracias a la variable cantidad puedo definir pasandole 1 o -1 si la funcion resta o suma.)
    const cambiarCantidad =(id, cantidad) =>{
        const indexProducto =cartList.findIndex(producto => producto.id === id) // busco el producto en mi carrito por su id y extraigo su index
        if(cantidad < 0 && cartList[indexProducto].cantidad==1){                // condicion para que si la cantidad baja a 0 lo borre de mi carrito
            eliminarProducto(id)
        } else{
            if(cantidad>0 && cartList[indexProducto].stock > cartList[indexProducto].cantidad){   // Condicion para que si suma cantidad nunca supere el stock de mi producto
                cartList[indexProducto].cantidad += cantidad
                setCartList([...cartList])
            } else if (cantidad<0){                                             // si resto y mi cantidad de producto no es 1 debo restar.
                cartList[indexProducto].cantidad += cantidad
                setCartList([...cartList])
            }
        }
    }

    const vaciarCarrito = () => setCartList([])

    return(
        <CartContext.Provider value ={{                                    // Valores y funciones a globalizar
            cartList,
            agregarCarrito,
            vaciarCarrito,
            cantidadTotal,
            precioTotal,
            eliminarProducto,
            cambiarCantidad
        }}>
            {children}
        </CartContext.Provider>
    )
}