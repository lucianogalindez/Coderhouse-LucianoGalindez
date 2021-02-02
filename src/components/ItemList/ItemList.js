import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({getProducts}) => {

    const [products, setProducts] = useState([])

    useEffect(() => {

        getProducts.then(result => setProducts(result))

    }, [getProducts])

    return (
        <div class='itemList' id='itemList'>

            <h1>Nuestro Productos</h1>
            <div className='itemList__products'>
                { 
                    products ?
                    products.map((product) => (
                        <Item key={product.id} product={product} />
                    )) :
                    (<h2>No hay productos en Stock</h2>)
                }
            </div>
        </div>
    )
}

export default ItemList
