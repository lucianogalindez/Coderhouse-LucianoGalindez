import React, { useEffect, useState }/*, { useState }*/ from 'react'
import { useParams } from 'react-router-dom'
//import ItemCount from '../../components/ItemCount/ItemCount'
import ItemList from '../../components/ItemList/ItemList'
import { getFirestore } from '../../firebase'
import './ItemListContainers.css'

const ItemListContainers = ({greeting}) => {

    const [products, setProducts] = useState([])

    const {category} = useParams()

    const firebaseProducts = async() => {
        const baseDeDatos = getFirestore()
        const itemCollection = baseDeDatos.collection('items')

        if (category === undefined) {

            await itemCollection.get()
                .then((value) => {
                    let aux = value.docs.map(element => ({...element.data(), id: element.id}))
                    setProducts(aux)
                })

        } else {
            const categoryItemCollection = itemCollection.where('category', '==', category)

            await categoryItemCollection.get()
                .then((value) => {
                    let aux = value.docs.map(element => ({...element.data(), id: element.id}))
                    setProducts(aux)
                })
        }
    }

    useEffect(() => {
        
        window.scroll(0, 0)

        firebaseProducts()


    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category])

    return (
        <>
        <div className='itemList__bg'></div>
        <div className='itemListContainer' id='itemListContainer'>
            <div className='itemListContainer__intro'>
                <h1>{category === undefined ? greeting : category.toUpperCase()}</h1>
                <a href='#itemList'><button>Ver Productos</button></a>
            </div>
        </div>
        {/*<ItemCount stock={stock} initial={1} onAdd={onAdd}/>*/}
        <ItemList products={products}/>
        </>
        )
}

export default ItemListContainers
