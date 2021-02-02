import React, { useState } from 'react'
import ItemCount from '../../components/ItemCount/ItemCount'
import ItemList from '../../components/ItemList/ItemList'
import './ItemListContainers.css'

const ItemListContainers = ({greeting}) => {

    /*const [stock, setStock] = useState(10)

    const onAdd = (amount) => {
        setStock(prev => prev - amount)
    }*/

    const products = [
        {
            id: 1,
            description: 'Notebook Asus',
            price: 80000,
            image: './images/notebook.jpeg'
        },
        {
            id: 2,
            description: 'Pantalla Samsung',
            price: 20000,
            image: './images/pantalla.jpg'
        },
        {
            id: 3,
            description: 'Tablet Lenovo',
            price: 8000,
            image: './images/tablet.jpg'
        },
        {
            id: 4,
            description: 'Amazon Echo 3° Gen',
            price: 4000,
            image: './images/alexa.jpg'
        }
    ]

    const getProducts = new Promise((resolve, reject) => {
        resolve(products)
    })

    return (
        <>
        <div className='itemList__bg'></div>
        <div className='itemListContainer' id='itemListContainer'>
            <div className='itemListContainer__intro'>
                <h1>{greeting}</h1>
                <a href='#itemList'><button>Ver Productos</button></a>
            </div>
        </div>
        {/*<ItemCount stock={stock} initial={1} onAdd={onAdd}/>*/}
        <ItemList getProducts={getProducts}/>
        </>
        )
}

export default ItemListContainers