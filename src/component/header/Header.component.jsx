import React from 'react'
import {Link} from 'react-router-dom'
import './header.style.scss'
const Header =() =>{
    return(
        <div className='header'>
        <div className = 'options'>
        <Link to = '/' className='option'>
        HomePage
        </Link>
        <Link to = '/Contact' className='option'>
        Contact
        </Link>
        <Link to = '/Login' className='option'>
        Login
        </Link>
    </div>
    </div>
    )
}
export default Header