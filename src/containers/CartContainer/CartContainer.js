import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import './CartContainer.css'

export const CartContainer = () => {

    const {cart, removeItem, clearCart} = useContext(CartContext)

    useEffect(() => {

        window.scroll(0, 0)

    }, [])

    console.log(cart.length)

    return (
        <div className='cartContainer'>

            <div className='cartContainer__info'>

                <h1 className='cartContainer__title'>Mi carrito</h1>

                {cart.length === 0 ?
                
                <div className='cartContainer__message'>
                    <h3>No hay items en el carrito. Puedes ver nuestro catalogo <Link to='/'>AQUI</Link></h3>
                </div> :

                (   <>
                    {cart.map((x) => (
                        <div key={x.item.id} className='cartContainer__product'>
                            <div>
                                <img src={x.item.image} alt={x.item.title} />
                            </div>
    
                            <Link to={`/producto/${x.item.id}`}><h4>{x.item.title}</h4></Link>
    
                            <div className='cartContainer__productPrice'>
                                <p>$ {x.item.price}</p>
                                <strong>{x.qty}</strong>
                                <button onClick={() => removeItem(x)}>Eliminar</button>
                            </div>
                        </div>
                    ))}
                    </>
                )
            }

                

            </div>

            <div className='cartContainer__price'>
                <div className='cartContainer__priceInfo'>
                    <h2>Subtotal ({cart.reduce((a,c) => a + 1 * c.qty, 0)} items) : $ {cart.reduce((a,c) => a + c.qty * c.item.price, 0)} </h2>
                    <button>Realizar Compra</button>
                    <div className='cartContainer__clear'><button onClick={() => clearCart()}>Limpiar carrito</button></div>
                </div>

            </div>
            
        </div>
    )
}
