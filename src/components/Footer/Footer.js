import React from 'react'
import './Footer.css'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

export const Footer = () => {

    const moveUp = () => {
        window.scroll(0, 0)
    }

    return (
        <div className='footer'>
            <p className='footer__title'>Animate - Ecommerce</p>
            <p className='footer__reserved'>Todos Los Derechos Reservados</p>
            <div className='footer__up' onClick={moveUp}><ArrowUpwardIcon /></div>
        </div>
    )
}
