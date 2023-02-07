import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../utils/gFetch'
import ItemList from '../ItemList/ItemList'
import style from "./style.css"

const ItemListConteiner = () => {
  const  [productos,setProductos] = useState([])
  const  [titulo,setTitulo] = useState("")
  const [loading, setLoading] = useState(true)
  const  {idCategoria} = useParams()

  function cambiarTitulo (){
    if(idCategoria == "placaDeVideo"){
      setTitulo("Placas de Video")
    } else{
      setTitulo("Procesadores")
    }
  }
  useEffect(() =>{
    if(idCategoria){                              // si mi parametro categoria no es undefined filtro mi producto. sino muestro todos
      gFetch()                                    //llamo a lista de productos
    .then(resResultado =>{
      setProductos(resResultado.filter(producto=> producto.categoria == idCategoria)),cambiarTitulo()              //si todo sale vien seteo mi lista de productos a la constante productos
    })
    .catch(error => console.log(error))         //si algo falla hago consol log del error
    .finally(() => setLoading(false))
    } else {
      gFetch()                                    
    .then(resResultado =>{
      setProductos(resResultado),setTitulo("Catalogo")              
    })
    .catch(error => console.log(error))         
    .finally(() => setLoading(false))
    }
  }, [idCategoria])                             //si cambia mi parametro idCategoria genero una reRenderizacion
  return (
    <div>
      <h1 style={{textAlign: "center", marginBottom:"30px", padding:"10px"}}>{titulo}</h1>
      <div className='prod'>
        {/* Verifico si loadign es true(no hay productos cargados) y cuando sea false traigo itemList */}
        {loading ? <h2>Cargando...</h2>: <ItemList productos = {productos}/>} 
      </div>
    </div>
  )
}

export default ItemListConteiner