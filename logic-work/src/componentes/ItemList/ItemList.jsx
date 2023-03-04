import React, { memo } from 'react'
import Item from '../Item/Item'

const ItemList = memo(({ products }) => {

    //por medio de mi prop pasa por ItemListConteiner realizo un map de mi lista de productos para printear cada item. (le paso id como key y producto como propiedad.)
    return (
        <>
            {products.map(product => <Item key={product.id} product={product} />)}
        </>
    )
})

export default ItemList