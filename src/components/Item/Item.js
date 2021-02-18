import React from 'react'
import './Item.css'

const Item = ({product}) => {

    return (
        <div className='item'>
            <img src={product.image} alt={product.description}/>
            <div className='item__info'>

                <h4>{product.title}</h4>
                <p className='item__infoPrice'>$ {product.price}</p>
                <p>Stock: <span>{product.stockItem}</span></p>

            </div>
        </div>
    )
}

export default Item
