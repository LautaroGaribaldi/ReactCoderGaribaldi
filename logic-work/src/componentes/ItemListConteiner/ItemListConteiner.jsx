import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, orderBy, query, where } from "firebase/firestore"

import ItemList from '../ItemList/ItemList'

import style from "./style.css"


const ItemListConteiner = () => {
    const [products, setProducts] = useState([])
    const [title, setTitle] = useState("")
    const [loading, setLoading] = useState(true)
    const { idCategory } = useParams()

    function changeTitle() {
        if (idCategory == "placaDeVideo") {
            setTitle("Placas de Video")
        } else if (idCategory == "procesador") {
            setTitle("Procesadores")
        } else {
            setTitle("Catalogo")
        }
    }

    useEffect(() => {
        const db = getFirestore()                       // conexcion con firestore
        const queryCollections = idCategory ? collection(db, "Productos") : query(collection(db, "Productos"), orderBy("categoria", "asc"))  // si idCategory tiene algo no ordeno.
        const queryFilter = idCategory ? query(queryCollections, where("categoria", "==", idCategory)) : queryCollections     // si idCategory tiene algo, genero filtro.
        getDocs(queryFilter)                                                                            // Obtengo mis productos
            .then(resp => setProducts(resp.docs.map(product => ({ id: product.id, ...product.data() }))))     // mapeo productos para generar objetos. spread operator
            .then(changeTitle())
            .catch(err => console.log(err))
            .finally(() => setLoading(false))                                                               // seteo loading a false para sacar el cargando
    }, [idCategory])                             //si cambia mi parametro idCategory genero una reRenderizacion



    return (
        <div>
            <h1 style={{ textAlign: "center", marginBottom: "30px", padding: "10px" }}>{title}</h1>
            <div className='prod'>
                {/* Verifico si loadign es true(no hay productos cargados) y cuando sea false traigo itemList */}
                {loading ? <img src="/cargando2.gif" alt="Gif cargando" /> : <ItemList products={products} />}
            </div>
        </div>
    )
}

export default ItemListConteiner