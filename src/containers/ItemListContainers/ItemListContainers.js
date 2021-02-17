import React, { useEffect, useState }/*, { useState }*/ from 'react'
import { useParams } from 'react-router-dom'
//import ItemCount from '../../components/ItemCount/ItemCount'
import ItemList from '../../components/ItemList/ItemList'
import products from '../../products'
import './ItemListContainers.css'

const addProducts = async () => {
    return new Promise((resolve, reject) => {
        resolve(products)
    })
}

const addCategoryProducts = async (category) => {
    return new Promise((resolve, reject) => {
        const productCategory = products.filter((product) => product.category === category)
        resolve(productCategory)
    })
}

const ItemListContainers = ({greeting}) => {

    const [productsCategory, setProductsCategory] = useState([])
    const [products, setProducts] = useState([])

    const {category} = useParams()

    //https://api.mercadolibre.com/products/search?status=active&site_id=MLA&q=Samsung&limit=5000
    //jira
    //metodologias agiles
    //PAYU GETNET

    useEffect(() => {
        
        /*if (category !== undefined) {
            setProductsCategory(products.filter((product) => product.category === category))
        }*/

        window.scroll(0, 0)
        
        if (category === undefined) {

            setTimeout( async () => {
                const stock = await addProducts()
                setProducts(stock)
            }, 2000);

        }  else {
            setProductsCategory([])
            setTimeout( async () => {
                const stock = await addCategoryProducts(category)
                setProductsCategory(stock)
            }, 2000);
        }

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
        <ItemList products={category === undefined ? products : productsCategory}/>
        </>
        )
}

export default ItemListContainers
