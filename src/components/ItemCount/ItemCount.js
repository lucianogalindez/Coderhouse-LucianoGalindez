import React from 'react'
import './ItemCount.css'

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Link } from 'react-router-dom';



const ItemCount = ({stock, setStock, initial, setInitial, cart, setCart}) => {

    const addItem = () => {
        if (initial < stock) {
            setInitial(prev => prev + 1)
        }
    }

    const removeItem = () => {
        if (initial > 1) {
            setInitial(prev => prev - 1)
        }
    }

    const onAdd = (amount) => {
        setStock((stock - amount))
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

                    <button onClick={addItem}><AddIcon/></button>

                </div> 
                )
                }
            </div>

            <div className='itemCount__buttom'>
                {
                cart === true ?
                
                    <button className='itemCount__buttom-cart' onClick={() => onAdd(initial)}>Agregar al carrito</button>
                
                :
                    
                    <Link to='/cart'>
                    <button className='itemCount__buttom-cart itemCount__buttom-buy'>Terminar Mi Compra ({initial})</button>
                    </Link>
    
                }
            </div>
            

        </div>
    )
}

export default ItemCount;