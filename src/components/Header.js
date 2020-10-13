import React from 'react';
import Logo from './Logo'
import MenuBar from './MenuBar'

const Header = () => {
    return (
        <header className='section' role='navigation'>
            <div className='container'>
                <input className='menu-btn' id='menu-btn' type='checkbox' />
                <label className='navbar-burger' htmlFor='menu-btn'>
                    <span className='navicon'></span>
                </label>
                <Logo />
                <MenuBar />

                <div className='navbar-search'>
                    <input type='text' className='searchInput' name='search' placeholder='ابحث عن فلم أو مسلسل' />

                </div>
            </div>
        </header>

    )
}

export default Header 