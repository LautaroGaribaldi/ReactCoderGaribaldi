import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

const ItemCount = ({initial = 1, stock = 10, onAdd}) => {
    const [count,setCount] = useState(initial)
    const sumar = () =>{
      if(count<stock){
        setCount(Number(count) + 1)       
      }                        // funcion para amuentar la cantidad a pedir siempre que la cantidad sea igual o menor al stock
    }
    const restar = () =>{
      if(count>initial){
        setCount(Number(count) - 1)                               // funcion para disminuir la cantidad a pedir siempre que cantidad sea mayor a 0
      }
    }

    const agregarCarrito = () =>{
      onAdd(count)
    }

  return (
    <div style={{marginBottom:"10px"}}>
      <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"center", marginBottom:"10px", alignItems:"center"}}>
        <button className='btn btn-primary' onClick={sumar} >
            +
        </button>
        <label>{count}</label>
        <button className='btn btn-primary' onClick={restar}>
            -
        </button>
      </div>
        <div>
          <Button style={{marginBottom:"10px"}} variant="primary" onClick={agregarCarrito}>Agregar al carrito</Button>
        </div>
    </div>
  )
}

export default ItemCount