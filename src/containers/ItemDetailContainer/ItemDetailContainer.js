/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'

const ItemDetailContainer = ({products}) => {

    const [product, setProduct] = useState({})

    const {id} = useParams()

    useEffect(() => {

        const producto = products?.filter((product) => {
            return product.id == id //de esta manera no importa que uno sea un string y el otro un entero. el doble igual solo toma el valor atras del tipo de variable
        })

        setProduct(producto[0])

    
    }, [id, products])


    /*const [product, setProduct] = useState({})
    
    useEffect(() => {
        
        setTimeout(() => {
            getItems()
            .then(result => setProduct(result))
        }, 2000);
        
        return () => {
        }

    }, [])*/

    

    return (
        <div>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer
