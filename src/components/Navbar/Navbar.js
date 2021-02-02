import React, { useState } from 'react'
import './Navbar.css'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close';
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <navbar className='navbar' id='navbar'>

            <div className='navbar__logo'>
                <a href='#itemListContainer'>Animate</a>
            </div>

            <div className='navbar__options'>
                <ul className='navbar__optionsList'>
                    <li className='navbar__option'><a href='#quienessomos'>Productos</a></li>
                    <li className='navbar__option'>
                        <a href='#productos'>
                            <CartWidget/>
                        </a>
                    </li>
                    <li className='navbar__option'><a href='#login'>Ingresar</a></li>
                </ul>
            </div>

            <div className='navbar__burger' onClick={() => setOpen(prev => !prev)}>{!open ? <MenuIcon/> : <CloseIcon/>} </div>

            <div className={ open ? 'navbar__showOptions' : 'navbar__hiddenOptions'}>
                <ul className='navbar__hiddenOptionsList'>
                    <li className='navbar__hiddenOption'><a href='#quienessomos'>Productos</a></li>
                    <li className='navbar__hiddenOption'>
                        <a href='#productos'>
                            <CartWidget/>
                        </a>
                    </li>
                    <li className='navbar__hiddenOption'><a href='#login'>Ingresar</a></li>
                </ul>
            </div>

        </navbar>
    )
}

export default Navbar;
