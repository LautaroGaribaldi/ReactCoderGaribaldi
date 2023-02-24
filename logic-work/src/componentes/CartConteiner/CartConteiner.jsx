import React from 'react'
import { useCartContext } from '../../context/CartContext'

const CartConteiner = () => {
  const {cartList, vaciarCarrito,precioTotal, eliminarProducto} = useCartContext()
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <div style={{backgroundColor:"white",display:"flex", flexDirection:"column", alignItems:"center", minWidth:"50%",padding:"5px",borderRadius:"11px"}}>
        {cartList.map(producto =>(
          <div key={producto.id} style={{display:"flex", flexDirection:"row", flexWrap:"wrap", alignItems:"center"}}>
            <img src={producto.imagen} alt=""  style={{width:"100px"}}/>
            <p style={{marginLeft:"10px",marginRight:"10px"}}> - {producto.nombre}</p>
            <p style={{marginLeft:"10px",marginRight:"10px"}}> - {producto.precio}</p>
            <p style={{marginLeft:"10px",marginRight:"10px"}}>cantidad: {producto.cantidad}</p>
            <button className='btn btn-outline-danger' onClick={() => eliminarProducto(producto.id)}>x</button>
          </div>
        ))
        }
        <p>TOTAL: {precioTotal()}</p>
        <button className='btn btn-outline-danger' onClick={vaciarCarrito}>VACIAR CARRITO</button>
      </div>
    </div>
  )
}

export default CartConteiner