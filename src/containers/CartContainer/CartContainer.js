import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { getFirestore } from '../../firebase'
import firebase from 'firebase'
import './CartContainer.css'

export const CartContainer = () => {

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [orderId, setOrderId] = useState('')

    const {cart, removeItem, clearCart} = useContext(CartContext)

    const createOrder = async (e) => {
        e.preventDefault()

        let buyer = {
            name: name,
            lastName: lastName,
            phone: phone
        } 

        let total = cart.reduce((a,c) => a + c.qty * c.item.price, 0)

        let order = {
            buyer: buyer,
            items: [...cart],
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: total
        }

        const fsDB = getFirestore()
        const ordenesCollection = fsDB.collection('orders')

        ordenesCollection
            .add(order)
            .then(value => {
                setOrderId(value.id)
                clearCart()
            })
            .catch(error => {
                console.log(error)
            })  

        updateStock(order)

        setName('')
        setLastName('')
        setPhone('')
    }

    const updateStock = (order) => {
        order.items.map((elemento, indice) => {
            let id = elemento.item.id
            let amount = elemento.qty

            var itemsCollection = getFirestore().collection('items')
            
            var docRef = itemsCollection.doc(id)
            docRef.get().then(value => {
                var stockPrevio = value.data().stockItem

                return docRef.update({
                    stockItem: stockPrevio - amount
                })
            })
            
        })
    }

    useEffect(() => {

        window.scroll(0, 0)

    }, [])

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

                </div>

                <div className='cartContainer__priceInfo'>

                    {!orderId ? (
                    <form className='cartContainer__userInfo' onSubmit={(e) => createOrder(e)}>
                        <h3>Informacion Usuario</h3>
                        <div>
                            <input type='text' placeholder='Nombre...' value={name} onChange={e => setName(e.target.value)} required></input>
                        </div>

                        <div>
                            <input type='text' placeholder='Apellido...' value={lastName} onChange={e => setLastName(e.target.value)} required></input>
                        </div>

                        <div>
                            <input type='text' placeholder='Telefono...' value={phone} onChange={e => setPhone(e.target.value)} required></input>
                        </div>

                        <div>
                            <button type='submit'>Realizar Compra</button>
                        </div>
                    </form>
                    ) : (
                        <div className='cartContainer__confirm'>
                            <h2>Su compra se ha concretado</h2>
                            <p>Comprobante N°: {orderId}</p>
                        </div>
                    )}

                    <div className='cartContainer__clear'>
                        {!orderId ?
                        <button className='cartContainer__clearButton' onClick={() => clearCart()}>Limpiar carrito</button> :
                        <Link to='/'><button className='cartContainer__continueButton' style={{backgroundColor: 'green'}}>Seguir Comprando</button></Link>
                        }
                    </div>

                </div>

            </div>
            
        </div>
    )
}
