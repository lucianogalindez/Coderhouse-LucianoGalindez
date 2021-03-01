import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

import { Link } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'

const ItemList = ({products}) => {
    
    
    /*const {cart, addItem} = useContext(CartContext)
    
    console.log(cart[0].item.id)*/


    if (products[0]?.stockItem === undefined) {
        return (
            <div className='itemList__loading'>
                <h2>Cargando Productos...</h2>
                <CircularProgress />
            </div>
        )
    } else {
        return (
        
            <div className='itemList' id='itemList'>
    
                <h1>Nuestro Productos</h1>
                <div className='itemList__products'>
                    { 
                        products ?
                        products.map((product) => (
                            <Link to={`/producto/${product.productId}`} key={product.id}>
                                <Item product={product} />
                            </Link>
                        )) :
                        (<h2>No hay productos en Stock</h2>)
                    }
                </div>
            </div>
        )
    }

    

    
}

export default ItemList
