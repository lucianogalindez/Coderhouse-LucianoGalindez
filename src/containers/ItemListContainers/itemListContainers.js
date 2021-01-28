import React, { useState } from 'react'
import ItemCount from '../../components/ItemCount/ItemCount'
import './ItemListContainers.css'

const ItemListContainers = ({greeting}) => {

    const [stock, setStock] = useState(10)

    const onAdd = (amount) => {
        setStock(prev => prev - amount)
    }

    return (
        <>
        <div className='itemList__bg'></div>
        <div className='itemList'>
            <div className='itemList__intro'>
                <h1>{greeting}</h1>
                <button>Ver Productos</button>
            </div>
        </div>
        <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
        </>
        )
}

export default ItemListContainers