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
        } else if (idCategoria == "procesador") {
            setTitulo("Procesadores")
        } else {
            setTitulo("Catalogo")
        }
    }

    useEffect(() => {
        const db = getFirestore()                       // conexcion con firestore
        const queryCollections = idCategoria ? collection(db, "Productos") : query(collection(db, "Productos"), orderBy("categoria", "asc"))  // si idCategoria tiene algo no ordeno.
        const queryFilter = idCategoria ? query(queryCollections, where("categoria", "==", idCategoria)) : queryCollections     // si idCategoria tiene algo, genero filtro.
        getDocs(queryFilter)                                                                            // Obtengo mis productos
            .then(resp => setProductos(resp.docs.map(product => ({ id: product.id, ...product.data() }))))     // mapeo productos para generar objetos. spread operator
            .then(cambiarTitulo())
            .catch(err => console.log(err))
            .finally(() => setLoading(false))                                                               // seteo loading a false para sacar el cargando
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