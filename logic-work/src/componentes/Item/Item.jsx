import React, { memo } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = memo(({ product }) => {
    const { id, nombre, descripcion, precio, imagen } = product;

    //Genero las card por medio de las propiedades de mi objeto pasadas por el parametro producto en el itemList.
    return (
        <Link to={`/detail/${id}`} style={{ marginTop: "10px", textDecoration: "none", color: "black" }}>
            <Card style={{ width: '18rem', marginLeft: "10px", minHeight: "448px" }}>
                <Card.Img variant="top" src={imagen} />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>
                        {descripcion}
                    </Card.Text>
                    <span>Precio: ${precio}</span>
                </Card.Body>
            </Card>
        </Link>
    )
})

export default Item