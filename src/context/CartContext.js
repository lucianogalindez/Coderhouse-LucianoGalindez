import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    useEffect(() => {


        /*if (cart.length !== 0) {
            localStorage.setItem('cart', JSON.stringify(cart))
        }*/

        if (localStorage.getItem('cart') != null && localStorage.getItem('cart') !== '[]' && cart.length === 0) {
            setCart(JSON.parse(localStorage.getItem('cart')))
        } else {
            localStorage.setItem('cart', JSON.stringify(cart))
        }



        
        
        
    }, [cart])

    const addItem = (product) => {

        const existItem = cart.find((x) => x.item.id === product.item.id)

        if(existItem) {
            setCart(cart.map((x) => x.item.id === existItem.item.id
            ? product
            : x)
            )

            console.log(cart)
        } else {
            setCart([...cart, product])

        }    

        localStorage.removeItem('cart')
        

    }

    const removeItem = (product) => {

        setCart(cart.filter((x) => x.item !== product.item))

        localStorage.removeItem('cart')

    }

    const clearCart = () => {
        setCart([])

        localStorage.removeItem('cart')
    }


    return <CartContext.Provider value={{cart, addItem, removeItem, clearCart}}>
        {children}
    </CartContext.Provider>
}

/* 

Lo que en esta seccion para funcione con el local Storage es simple.
1 => Mediante la funcionalidad del UseEffect hago que cuando no tengo articulos en el cart, pero si en el Local Storage, lleno mi cart de los articulos almacenados alli
2 => cada vez que hago un addItem o un remove Item, vacio mi local Storage (el cart sigue con los productos), PORQUE ? porque en mi useEffect tengo la funcionalidad que cuando mi Local Storage esta vacio y mi cart no, el nuevo cart (luego del remove o add) llena de informacion al Local Storage. Entonces cuando la pagina se recarga ya tiene en el LS la info correcta


*/
