import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({producto}) => {
    const {id,categoria,nombre,descripcion,precio,imagen} = producto;
  return (
      <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            {descripcion}
            <br></br>
            <br></br>
            <span>Precio: ${precio}</span>
          </Card.Text>
          <Button variant="primary" className={id}>Comprar</Button>
        </Card.Body>
      </Card>
  )
}

export default ItemDetail