import React from 'react';
import logo from '../img/logo.svg';

class Footer extends React.Component {
    render() {
        return (
            <footer className="section">
                <div className="container">
                    <section className="footer-nav" role="navigation">
                        <a className="navbar-item grayscale" href="#/"><img src={logo} width="80" /></a>
                        <div className="navbar-menu">
                            <ul className="navbar-menu">
                                <li><a className="navbar-item" href="#">الرئيسية</a></li>
                                <li><a className="navbar-item" href="./movies.html">أفلام</a></li>
                                <li><a className="navbar-item" href="./shows.html">مسلسلات</a></li>
                            </ul>
                        </div>
                    </section>
                </div>
            </footer>
        );
    }
}

export default Footer;