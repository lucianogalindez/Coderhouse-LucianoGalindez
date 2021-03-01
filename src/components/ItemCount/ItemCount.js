import React from 'react'
import './ItemCount.css'

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Link } from 'react-router-dom';



const ItemCount = ({stock, setStock, initial, setInitial, cart, setCart, product, addItem}) => {

    const setItem = () => {
        if (initial < stock) {
            setInitial(prev => prev + 1)
        }
    }

    const removeItem = () => {
        if (initial > 1) {
            setInitial(prev => prev - 1)
        }
    }

    const onAdd = () => {
        setStock((stock - initial))

        const item = {
            item: {
                id: product.productId,
                title: product.title,
                price: product.price,
                image: product.image
            },
            qty: initial
        }

        addItem(item)

        setCart(false)
    }

    return (
        <div className='itemCount'>

            <div className='itemCount__addCart'>

                <div>
                    <p>Stock: {stock}</p>
                </div>

                {cart === true &&
                (
                <div className='itemCount__item'>

                    <button onClick={removeItem}><RemoveIcon/></button>

                    <div><p>{initial}</p></div>

                    <button onClick={setItem}><AddIcon/></button>

                </div> 
                )
                }
            </div>

            <div className='itemCount__buttom'>
                {
                cart === true ?
                
                    <button className='itemCount__buttom-cart' onClick={() => onAdd()}>Agregar al carrito</button>
                
                :
                    <div className='itemCount__buyButtoms'>

                    <Link to='/cart'>
                    <button className='itemCount__buttom-cart itemCount__buttom-buy'>Terminar Mi Compra ({initial})</button>
                    </Link>

                    <Link to='/'>
                        <button className='itemCount__buttom-cart'>Seguir comprando</button>
                    </Link>

                    </div>
    
                }
            </div>
            

        </div>
    )
}

export default ItemCount;