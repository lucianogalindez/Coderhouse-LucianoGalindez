/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import products from '../../products'

const addProduct = async (id) => {
    return new Promise((resolve, reject) => {
        const productId = products.filter((product) => product.id == id)
        resolve(productId)
    })
}

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})

    const {id} = useParams()

    const findProduct = async (id) => {
        const item = await addProduct(id)
        setProduct(item[0])
    }

    useEffect(() => {

        /*const producto = products?.filter((product) => {
            return product.id == id //de esta manera no importa que uno sea un string y el otro un entero. el doble igual solo toma el valor atras del tipo de variable
        })*/

        setProduct(findProduct(id))

    
    }, [id])


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
