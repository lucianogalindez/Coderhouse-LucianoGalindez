import React from 'react'
import './ItemListContainers.css'

const ItemListContainers = ({greeting}) => {
    return (
        <>
        <div className='itemList__bg'></div>
        <div className='itemList'>
            <div className='itemList__intro'>
                <h1>{greeting}</h1>
                <button>Ver Productos</button>
            </div>
        </div>
        </>
        )
}

export default ItemListContainers