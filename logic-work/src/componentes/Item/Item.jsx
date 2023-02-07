import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({producto}) => {
  const {id,categoria,nombre,descripcion,precio,imagen} = producto;
  // const [nombre,setNombre] = useState([])
  // useEffect(() =>{
  //   setNombre(producto.nombre)
  //   console.log(producto)
  // },[])
  //console.log(producto)

  //Genero las card por medio de las propiedades de mi objeto pasadas por el parametro producto en el itemList.
  return (
    <Link to={`/detalle/${id}`} style={{marginTop:"10px",textDecoration:"none", color:"black"}}>
      <Card style={{ width: '18rem', marginLeft:"10px", minHeight:"448px" }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            {descripcion}
          </Card.Text>
          <span>Precio: ${precio}</span>
          {/* <Button variant="primary" className={id}>Detalle</Button> */}
        </Card.Body>
      </Card>
    </Link>
  )
}

export default Item