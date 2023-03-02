import React, { memo } from 'react'
import Item from '../Item/Item'

const ItemList = memo(({ productos }) => {
    const { id, categoria, nombre, descripcion, precio, imagen } = productos;

    //por medio de mi prop pasa por ItemListConteiner realizo un map de mi lista de productos para printear cada item. (le paso id como key y producto como propiedad.)
    return (
        <>
            {productos.map(producto => <Item key={producto.id} producto={producto} />)}
        </>
    )
})

export default ItemList