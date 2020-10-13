import React from 'react'

const MenuBar = () => {
    return (
        <ul className='navbar-menu'>
            <li >
                <a href='#' className='navbar-item active'>الرئيسة</a>
            </li>
            <li >
                <a href='#' className='navbar-item '>أفلام</a>
            </li>
            <li >
                <a href='#' className='navbar-item '>مسلسلات</a>
            </li>
        </ul>
    )

}

export default MenuBar