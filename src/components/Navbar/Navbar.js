import React, { useState } from 'react'
import './Navbar.css'
import MenuIcon from '@material-ui/icons/Menu'

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const openMenu = () => {
        if (open === false) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    }

    return (
        <navbar className='navbar' id='navbar'>

            <div className='navbar__logo'>
                <a href='#navbar'>Animate</a>
            </div>

            <div className='navbar__options'>
                <ul className='navbar__optionsList'>
                    <li className='navbar__option'><a href='#quienessomos'>Quines Somos</a></li>
                    <li className='navbar__option'><a href='#productos'>Productos</a></li>
                    <li className='navbar__option'><a href='#login'>Ingresar</a></li>
                </ul>
            </div>

            <div className='navbar__burger' onClick={openMenu}><MenuIcon/></div>

            <div className={ open ? 'navbar__showOptions' : 'navbar__hiddenOptions'}>
                <ul className='navbar__hiddenOptionsList'>
                    <li className='navbar__hiddenOption'><a href='#quienessomos'>Quines Somos</a></li>
                    <li className='navbar__hiddenOption'><a href='#productos'>Productos</a></li>
                    <li className='navbar__hiddenOption'><a href='#login'>Ingresar</a></li>
                </ul>
            </div>

        </navbar>
    )
}

export default Navbar;
