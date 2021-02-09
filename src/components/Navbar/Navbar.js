import React, { useState } from 'react'
import './Navbar.css'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close';
import CartWidget from '../CartWidget/CartWidget'

import { Link } from 'react-router-dom'

const Navbar = () => {

    const [open, setOpen] = useState(false)

    //const {categoryId} = useParams()

    const handlerOpen = () => {
        setOpen(prev => !prev)
    }

    return (
        <navbar className='navbar' id='navbar'>

            
            <Link to='/'>
                <div className='navbar__logo'>
                    Animate
                </div>
            </Link>

            <div className='navbar__options'>
                <ul className='navbar__optionsList'>

                    <Link to='/category/notebooks'>
                        <li className='navbar__option'>
                            <span>Notebooks</span>
                        </li>
                    </Link>

                    <Link to='/category/tvs'>
                        <li className='navbar__option'>
                            <span>TVs</span>
                        </li>
                    </Link>

                    <Link>
                        <li className='navbar__option'>
                            <span>
                                <CartWidget/>
                            </span>
                        </li>
                    </Link>
                    
                    <Link to='/category/parlantes'>
                        <li className='navbar__option'>
                            <span>Parlantes</span>
                        </li>
                    </Link>

                    <Link to='/category/juegos'>
                        <li className='navbar__option'>
                            <span>Games</span>
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

                    <Link onClick={handlerOpen}>
                        <li className='navbar__hiddenOption'>
                            <span>
                                <CartWidget/>
                            </span>
                        </li>
                    </Link>

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

        </navbar>
    )
}

export default Navbar;
