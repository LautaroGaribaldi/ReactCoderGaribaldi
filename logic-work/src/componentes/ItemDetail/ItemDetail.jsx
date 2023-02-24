import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';

const InputCount = ()=>{
  return(
    <div style={{display:"flex"}}>
        <Link to="/cart">
          <button className='btn btn-outline-primary'>Ir al carrito de compras</button>
        </Link>
        <Link to="/">
          <button className='btn btn-outline-primary'>Seguir comprando</button>
        </Link>
    </div>
  )
}

const ItemDetail = ({producto}) => {
    const {id,categoria,nombre,descripcion,precio,imagen, stock} = producto;
    const [isCount, setIsCount] = useState(true)              // genero el estado de mi boton para poder cambiarlo al apretar comprar.

    const { agregarCarrito} = useCartContext()                // del contextto CartContext extraigo solamente la funcion agregarCarrito.

    const onAdd = (cant)=>{                                              // Funcion agregar productos al carrito.
      console.log(cant)
      agregarCarrito({...producto, cantidad: cant})                      // spread operator para agregar a mi producto la propiedad cantidad, su valor y agregarlo a mi array.
      setIsCount(false)                                                  // Modifico que botones muestro.

    }

  return (
      // <Card style={{ width: '25rem', marginTop:"50px" }}>
      //   <Card.Img variant="top" src={imagen} />
      //   <Card.Body>
      //     <Card.Title>{nombre}</Card.Title>
      //     <Card.Text>
      //       {descripcion}
      //       <br></br>
      //       <br></br>
      //       <span>Precio: ${precio}</span>
      //     </Card.Text>
      //     <Button variant="primary" className={id}>Comprar</Button>
      //   </Card.Body>
      // </Card>
      <div style={{backgroundColor:"white", marginTop:"50px", display:"flex", flexDirection:"column", flexWrap:"wrap", alignItems:"center"}}>
        <img src={imagen} alt=""  style={{width: '15rem', textAlign:"center", margin:"auto"}}/>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <span style={{marginBottom:"10px"}}>Precio: ${precio}</span>
        {
          isCount ?
          <ItemCount initial = {1} stock ={stock} onAdd={onAdd}/>
          :
          <InputCount/>
        }
      </div>
  )
}

export default ItemDetail