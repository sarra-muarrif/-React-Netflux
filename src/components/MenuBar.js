import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuBar = () => {
    return (
        <ul className='navbar-menu'>
            <li >
                <NavLink exact to='/' className='navbar-item active'>الرئيسة</NavLink>
            </li>
            <li >
                <NavLink exact to='/shows' className='navbar-item '>أفلام</NavLink>
            </li>
            <li >
                <NavLink exact to='/movies' className='navbar-item '>مسلسلات</NavLink>
            </li>
        </ul>
    )

}

export default MenuBar