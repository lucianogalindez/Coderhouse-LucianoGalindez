import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (product) => {

        const existItem = cart.find((x) => x.item.id === product.item.id)

        if(existItem) {
            setCart(cart.map((x) => x.item.id === existItem.item.id
            ? product
            : x)
            )
        } else {
            setCart([...cart, product])
        }        

    }

    const removeItem = (product) => {

        setCart(cart.filter((x) => x.item !== product.item))
    }

    console.log(cart)


    return <CartContext.Provider value={{cart, addItem, removeItem}}>
        {children}
    </CartContext.Provider>
}
