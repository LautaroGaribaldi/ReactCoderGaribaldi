import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../utils/gFetch'
import Item from '../Item/Item'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailConteiner = () => {
    const  [productos,setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const  {idProducto} = useParams()
    useEffect(() =>{
      gFetch()                                    //llamo a lista de productos
      .then(resResultado =>{
        setProductos(resResultado)                //si todo sale vien seteo mi lista de productos a la constante productos
      })
      .catch(error => console.log(error))         //si algo falla hago consol log del error
      .finally(() => setLoading(false))           // cambio el loading a falso para que cambie la pagina web.
    }, [])
    //console.log(productos)
    return (
      <div className='prod'>
        {/* Verifico si loadign es true(no hay productos cargados) y cuando sea false traigo itemList */}
        {loading ? <h2>Cargando...</h2>: <ItemDetail producto = {productos.find(producto => producto.id == idProducto )}/>} 
      </div>
    )
  }
export default ItemDetailConteiner