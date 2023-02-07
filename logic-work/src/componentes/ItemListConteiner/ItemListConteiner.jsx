import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../utils/gFetch'
import ItemList from '../ItemList/ItemList'
import style from "./style.css"

const ItemListConteiner = () => {
  const  [productos,setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const  {idCategoria} = useParams()
  useEffect(() =>{
    if(idCategoria){                              // si mi parametro categoria no es undefined filtro mi producto. sino muestro todos
      gFetch()                                    //llamo a lista de productos
    .then(resResultado =>{
      setProductos(resResultado.filter(producto=> producto.categoria == idCategoria))                //si todo sale vien seteo mi lista de productos a la constante productos
    })
    .catch(error => console.log(error))         //si algo falla hago consol log del error
    .finally(() => setLoading(false))
    } else {
      gFetch()                                    
    .then(resResultado =>{
      setProductos(resResultado)                
    })
    .catch(error => console.log(error))         
    .finally(() => setLoading(false))
    }
  }, [idCategoria])                             //si cambia mi parametro idCategoria genero una reRenderizacion
  //console.log(productos)
  return (
    <div className='prod'>
      {/* Verifico si loadign es true(no hay productos cargados) y cuando sea false traigo itemList */}
      {loading ? <h2>Cargando...</h2>: <ItemList productos = {productos}/>} 
    </div>
  )
}

export default ItemListConteiner