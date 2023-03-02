import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, orderBy, query, where } from "firebase/firestore"
import ItemList from '../ItemList/ItemList'
import style from "./style.css"


const ItemListConteiner = () => {
  const [productos, setProductos] = useState([])
  const [titulo, setTitulo] = useState("")
  const [loading, setLoading] = useState(true)
  const { idCategoria } = useParams()

  function cambiarTitulo() {
    if (idCategoria == "placaDeVideo") {
      setTitulo("Placas de Video")
    } else {
      setTitulo("Procesadores")
    }
  }

  useEffect(() => {
    const db = getFirestore()                       // conexcion con firestore
    if (idCategoria) {                              // si mi parametro categoria no es undefined filtro mi producto. sino muestro todos
      const queryCollections = collection(db, "Productos")
      const queryFilter = query(queryCollections, where("categoria", "==", idCategoria))                // Filtro mis productos por la categoria en idCategoria
      getDocs(queryFilter)                                                                            // Obtengo mis productos
        .then(resp => setProductos(resp.docs.map(product => ({ id: product.id, ...product.data() }))))     // mapeo productos para generar objetos. spread operator
        .then(cambiarTitulo())
        .catch(err => console.log(err))
        .finally(() => setLoading(false))                                                               // seteo loading a false para sacar el cargando
    } else {
      const queryCollections = query(collection(db, "Productos"), orderBy("categoria", "asc"))           // ordeno por categoria ascendiente mis  productos
      getDocs(queryCollections)
        .then(resp => setProductos(resp.docs.map(product => ({ id: product.id, ...product.data() }))))
        .then(setTitulo("Catalogo"))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }
  }, [idCategoria])                             //si cambia mi parametro idCategoria genero una reRenderizacion

  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "30px", padding: "10px" }}>{titulo}</h1>
      <div className='prod'>
        {/* Verifico si loadign es true(no hay productos cargados) y cuando sea false traigo itemList */}
        {loading ? <img src="/cargando2.gif" alt="Gif cargando" /> : <ItemList productos={productos} />}
      </div>
    </div>
  )
}

export default ItemListConteiner