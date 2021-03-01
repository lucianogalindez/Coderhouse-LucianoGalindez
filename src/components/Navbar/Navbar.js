import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import CartWidget from '../CartWidget/CartWidget'

import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const Navbar = () => {

    const [open, setOpen] = useState(false)
    const [show, setShow] = useState(false)

    const {cart} = useContext(CartContext)

    //const {categoryId} = useParams()

    const handlerOpen = () => {
        setOpen(prev => !prev)
    }

    const transitionNavbar = () => {
        if (window.scrollY > 30) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavbar)

        return () => {
            window.removeEventListener('scroll', transitionNavbar)
        }
    })

    return (
        <nav className={show ? 'navbar navbar__bg' : 'navbar'}  id='navbar'>

            
            <Link to='/'>
                <div className='navbar__logo'>
                    Animate
                </div>
            </Link>

            <div className='navbar__options'>
                <ul className='navbar__optionsList'>

                    <Link to='/category/tvs'>
                        <li className='navbar__option'>
                            <span>TVs</span>
                        </li>
                    </Link>

                    <Link to='/category/notebooks'>
                        <li className='navbar__option'>
                            <span>Notebooks</span>
                        </li>
                    </Link>

                    { cart.length > 0 && 
                    (
                    <Link to='/cart'>
                        <li className='navbar__option'>
                            <span>
                                <CartWidget/>{cart.length > 0 && (<span className='navbar__cartLength'>{cart.reduce((a,c) => a + 1 * c.qty, 0)}</span>)}
                            </span>
                        </li>
                    </Link>
                    )
                    }
                    
                    <Link to='/category/parlantes'>
                        <li className='navbar__option'>
                            <span>Parlantes</span>
                        </li>
                    </Link>

                    <Link to='/category/juegos'>
                        <li className='navbar__option'>
                            <span>Juegos</span>
                        </li>
                    </Link>
                </ul>
            </div>

            <div className='navbar__burger' onClick={handlerOpen}>
                {!open ? <MenuIcon/> : <CloseIcon/>} 
            </div>

            <div className={ open ? 'navbar__showOptions' : 'navbar__hiddenOptions'}>
                <ul className='navbar__hiddenOptionsList'>
                    <Link to='/category/notebooks' onClick={handlerOpen}>
                        <li className='navbar__hiddenOption'>
                            <span>Notebooks</span>
                        </li>
                    </Link>

                    <Link to='/category/tvs' onClick={handlerOpen}>
                        <li className='navbar__hiddenOption'>
                            <span>Tvs</span>
                        </li>
                    </Link>

                    { cart.length > 0 &&
                    (
                    <Link to='/cart' onClick={handlerOpen}>
                        <li className='navbar__hiddenOption'>
                            <span>
                                <CartWidget/>{cart.length > 0 && (<span className='navbar__cartLength'>{cart.length}</span>)}
                            </span>
                        </li>
                    </Link>
                    )
                    }

                    <Link to='/category/parlantes' onClick={handlerOpen}>
                        <li className='navbar__hiddenOption'>
                            <span>Parlantes</span>
                        </li>
                    </Link>

                    <Link to='/category/juegos' onClick={handlerOpen}>
                        <li className='navbar__hiddenOption'>
                            <span>Juegos</span>
                        </li>
                    </Link>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar;
