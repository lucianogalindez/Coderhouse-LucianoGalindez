import React from 'react'
import './Item.css'
import CartWidget from '../CartWidget/CartWidget'

const Item = ({product}) => {

    const addItem = (e) => {
        e.preventDefault()
    }

    return (
        <div className='item'>
            <img src={product.image} alt={product.description}/>
            <div className='item__info'>

                <h4>{product.title}</h4>
                <p className='item__infoPrice'>$ {product.price}</p>
                <p>Stock: <span>{product.stockItem}</span></p>
                <div className='item__cart' onClick={addItem}><CartWidget /></div>

            </div>
        </div>
    )
}

export default Item
