import React, { useState } from 'react'
import './Navbar.css'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close';
import CartWidget from '../CartWidget/CartWidget'

import { Link } from 'react-router-dom'

const Navbar = () => {

    const [open, setOpen] = useState(false)

    //const {categoryId} = useParams()

    return (
        <navbar className='navbar' id='navbar'>

            <Link to='/'>
                <div className='navbar__logo'>
                    Animate
                </div>
            </Link>

            <div className='navbar__options'>
                <ul className='navbar__optionsList'>

                    <Link>
                        <li className='navbar__option'>
                            <span>Productos</span>
                        </li>
                    </Link>

                    <Link>
                        <li className='navbar__option'>
                            <span>
                                <CartWidget/>
                            </span>
                        </li>
                    </Link>
                    
                    <Link>
                        <li className='navbar__option'>
                            <span>Ingresar</span>
                        </li>
                    </Link>
                </ul>
            </div>

            <div className='navbar__burger' onClick={() => setOpen(prev => !prev)}>{!open ? <MenuIcon/> : <CloseIcon/>} </div>

            <div className={ open ? 'navbar__showOptions' : 'navbar__hiddenOptions'}>
                <ul className='navbar__hiddenOptionsList'>
                    <Link>
                        <li className='navbar__hiddenOption'>
                            <span>Productos</span>
                        </li>
                    </Link>

                    <Link>
                        <li className='navbar__hiddenOption'>
                            <span>
                                <CartWidget/>
                            </span>
                        </li>
                    </Link>

                    <Link>
                        <li className='navbar__hiddenOption'>
                            <span>Ingresar</span>
                        </li>
                    </Link>
                </ul>
            </div>

        </navbar>
    )
}

export default Navbar;
