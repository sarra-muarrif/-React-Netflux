import React from 'react'
import logo from '../img/logo.svg'

const Logo = (props) => {
    return (
        <a href='#' className={props.classes}>
            <img src={logo} width='80' />
        </a>
    )
}

Logo.defaultProps = {
    classes: 'navbar-item'
};
export default Logo