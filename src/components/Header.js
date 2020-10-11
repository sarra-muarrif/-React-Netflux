import React from 'react';
import logo from '../img/logo.svg'

class Header extends React.Component {
    render() {
        return (
            <header className='section' role='navigation'>
                <div className='container'>
                    <input className='menu-btn' id='menu-btn' type='checkbox' />
                    <label className='navbar-burger' htmlFor='menu-btn'>
                        <span className='navicon'></span>
                    </label>
                    <a href='#' className='navbar-item'>
                        <img src={logo} width='80' />
                    </a>
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
                    <div className='navbar-search'>
                        <input type='text' className='searchInput' name='search' placeholder='ابحث عن فلم أو مسلسل' />

                    </div>
                </div>
            </header>

        )

    }
}

export default Header 