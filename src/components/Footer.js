import React from 'react';
import Logo from './Logo';
import MenuBar from './MenuBar'

const Footer = () => {
    return (
        <footer className="section">
            <div className="container">
                <section className="footer-nav" role="navigation">
                    <Logo classes="grayscale" />
                    <div className="navbar-menu">
                        <MenuBar />
                    </div>
                </section>
            </div>
        </footer>
    );
}

export default Footer;