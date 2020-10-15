import React from 'react';
import Logo from './Logo'
import MenuBar from './MenuBar'
import { withRouter } from 'react-router'

class Header extends React.Component {
    state = {
        searchTerm: '',
        origin: ''
    }

    onChangeHandler = (e) => {
        if (e.target.value) {
            this.setState({
                searchTerm: e.target.value,
                origin: this.props.location.pathname.includes('/search') ? this.state.origin : this.props.location.pathname,
            })
            return this.props.history.push(`/search/${e.target.value}`)
        } else {
            this.setState({ searchTerm: '' })
            this.props.history.pathname.push(this.state.origin)
        }
    }
    render() {
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
                        <input type='text' className='searchInput' name='search' placeholder='ابحث عن فلم أو مسلسل' onChange={this.onChangeHandler} />

                    </div>
                </div>
            </header>

        )
    }
}

export default withRouter(Header) 