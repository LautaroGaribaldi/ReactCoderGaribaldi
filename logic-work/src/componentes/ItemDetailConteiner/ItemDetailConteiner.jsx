import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from "firebase/firestore"
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailConteiner = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { idProduct } = useParams()

    // para traer 1 producto (itemDetailConteiner)
    useEffect(() => {
        const db = getFirestore()                       // conexcion con firestore
        const query = doc(db, "Productos", idProduct)
        getDoc(query)
            .then(resp => setProduct({ id: resp.id, ...resp.data() }))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className='prod'>
            {/* Verifico si loadign es true(no hay productos cargados) y cuando sea false traigo itemList */}
            {loading ? <img src="/cargando2.gif" alt="Gif cargando" /> : <ItemDetail product={product} />}
        </div>
    )
}
export default ItemDetailConteiner