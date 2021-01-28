import React, { useState } from 'react'
import './ItemCount.css'

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';



const ItemCount = ({stock, initial, onAdd}) => {

    const [amount, setAmount] = useState(initial)

    const addItem = () => {
        setAmount(prev => prev + 1)
    }

    const removeItem = () => {
        if (amount > 0) {
            setAmount(prev => prev - 1)
        }
    }

    return (
        <div className='itemCount'>

            <div className='itemCount__title'>
                <h1>Agregar Items</h1>
            </div>

            <div className='itemCount__addCart'>
                <div className='itemCount__stock'>
                    <p>Es stock es de: {stock}</p>
                </div>
                <div className='itemCount__item'>

                    <button onClick={addItem}><AddIcon/></button>

                    <div><p>{amount}</p></div>

                    <button onClick={removeItem}><RemoveIcon/></button>

                </div>
                <div className='itemCount__buttom'>
                    {
                        amount > stock || amount === 0 ?
                        <button disabled>Agregar al carrito</button> :
                        <button className='itemCount__buttom-active' onClick={() => onAdd(amount)}>Agregar al carrito</button>
                    }
                </div>
            </div>

        </div>
    )
}

export default ItemCount;