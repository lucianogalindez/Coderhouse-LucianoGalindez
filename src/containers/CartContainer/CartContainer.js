import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './CartContainer.css'

export const CartContainer = () => {

    const {cart, removeItem} = useContext(CartContext)

    return (
        <div className='cartContainer'>

            <div className='cartContainer__info'>

                <h1 className='cartContainer__title'>Mi carrito</h1>

                {cart.map((x) => (
                    <div key={x.item.id} className='cartContainer__product'>
                        <div>
                            <img src={x.item.image} alt={x.item.title} />
                        </div>

                        <h4>{x.item.title}</h4>

                        <div className='cartContainer__productPrice'>
                            <p>$ {x.item.price}</p>
                            <strong>{x.qty}</strong>
                            <button onClick={() => removeItem(x)}>Eliminar</button>
                        </div>
                    </div>
                ))}

            </div>

            <div className='cartContainer__price'>
                <div className='cartContainer__priceInfo'>
                    <h2>Subtotal ({cart.reduce((a,c) => a + 1 * c.qty, 0)} items) : $ {cart.reduce((a,c) => a + c.qty * c.item.price, 0)} </h2>
                    <button>Realizar Compra</button>
                </div>

            </div>
            
        </div>
    )
}
