import React, { useEffect, useState } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail'

const getItems = () => {    
    return new Promise((resolve, reject) => {
        resolve({
            id: 1,
            title: 'Notebook Asus',
            description: 'Esta notebook Asus ZenBook rompera todas las expectativas que puedas tener. Con su procesador Ryzen 5 contaras con todas las facilidades posibles cuando se trata de rendimiento. Asimismo, su potente tarjeta grafica integrada te permitira disfrutar de los ultimos juegos del mercado sin problemas',
            price: 80000,
            image: './images/notebook.jpeg',
            stockItem: 5
        })
    })
}

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    
    useEffect(() => {
        
        setTimeout(() => {
            getItems()
            .then(result => setProduct(result))
        }, 2000);
        
        return () => {
        }

    }, [])

    return (
        <div>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer
