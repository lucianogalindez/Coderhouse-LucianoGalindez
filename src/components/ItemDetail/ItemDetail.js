import React, { useState } from 'react'
import './ItemDetail.css'
import CircularProgress from '@material-ui/core/CircularProgress'

const ItemDetail = ({product}) => {

    const [qty, setQty] = useState(1)

    return (
        <div className='itemDetail'>

        {product.stockItem===undefined ? <div className='itemDetail__loading'><CircularProgress/></div> : 

            (<>
            <div className='itemDetail__image'>
                <img src={product.image} alt={product.title} />
            </div>
            <div className='itemDetail__info'>
                <div className='itemDetail__description'>
                    <h2>{product.title}</h2>
                    <p className='itemDetail__price'>$ {product.price}</p>
                    <p className='itemDetail__descriptionItem'>{product.description}</p>
                </div>
                <div className='itemDetail__options'>
                    <div className='itemDetail__stock'>
                        <div className='itemDetail__stockTitle'>Stock: {product.stockItem}</div>
                        <div className='itemDetail__stockSelect'>
                            <select value={qty} onChange={e => setQty(e.target.value)}>
                                {
                                    [...Array(product.stockItem).keys()].map(x => (
                                        <option key={x+1} value={x+1}>{x+1}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className='itemDetail__buttons'>
                        <button className='primary itemDetail__cart'>Agregar al carrito</button>
                        <button className='itemDetail__buy'>Comprar</button>
                    </div>
                </div>
            </div>
            </>)}
        </div>
    )
}

export default ItemDetail