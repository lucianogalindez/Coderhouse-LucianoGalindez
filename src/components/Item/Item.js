import React from 'react'
import './Item.css'

const Item = ({product}) => {

    return (
        <div className='item'>
            <img src={product.image} alt={product.description}/>
            <div className='item__info'>
                <h4>{product.description}</h4>
                <p>$ {product.price}</p>
            </div>
        </div>
    )
}

export default Item
