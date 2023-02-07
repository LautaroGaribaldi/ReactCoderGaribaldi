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
    <Link to={`/detalle/${id}`}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            {descripcion}
          </Card.Text>
          {/* <Button variant="primary" className={id}>Detalle</Button> */}
        </Card.Body>
      </Card>
    </Link>
  )
}

export default Item