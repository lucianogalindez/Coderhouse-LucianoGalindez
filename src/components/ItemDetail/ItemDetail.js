import React, { useEffect, useState } from 'react'
import './ItemDetail.css'
import CircularProgress from '@material-ui/core/CircularProgress'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({product}) => {

    //const [qty, setQty] = useState(1)
    const [initial, setInitial] = useState(1)
    const [cart, setCart] = useState(true)
    const [stock, setStock] = useState(0)

    useEffect(() => {
        
        window.scroll(0, 0)
        setStock(product.stockItem)

    }, [product.stockItem])

    console.log(cart)


    return (
        <div className='itemDetail'>

        {product?.stockItem===undefined ? <div className='itemDetail__loading'><CircularProgress/></div> : 

            (<>
            <div className='itemDetail__image'>
                <img src={product?.image} alt={product?.title} />
            </div>  
            <div className='itemDetail__info'>
                <div className='itemDetail__description'>
                    <h2>{product?.title}</h2>
                    <p className='itemDetail__price'>$ {product?.price}</p>
                    <p className='itemDetail__descriptionItem'>{product?.description}</p>
                </div>
                <div className='itemDetail__options'>
                    <div className='itemDetail__stock'>
                        
                            {/*<select value={qty} onChange={e => setQty(e.target.value)}>
                                {
                                    [...Array(product.stockItem).keys()].map(x => (
                                        <option key={x+1} value={x+1}>{x+1}</option>
                                    ))
                                }
                            </select>*/}
                            <ItemCount stock={stock} setStock={setStock} setInitial={setInitial} initial={initial} setCart={setCart} cart={cart}/>
                            
                    </div>
                    {/*<div className='itemDetail__buttons'>
                        <button className='primary itemDetail__cart'>Agregar al carrito</button>
                        <button className='itemDetail__buy'>Comprar</button>
                    </div>*/}
                </div>
            </div>
            </>)}
        </div>
    )
}

export default ItemDetail