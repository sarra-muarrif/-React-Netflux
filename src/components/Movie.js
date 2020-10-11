import React from 'react'

class Movie extends React.Component {
    render() {
        return (
            <li className='movie'>
                <a href='#'>
                    <img src={this.props.image} alt='movie cover' />
                    <span className='movie-description'>{this.props.title}
                        <span className='play-icon'>
                            <i className='fas fa-play'></i>
                        </span>
                    </span>
                </a>
            </li>

        )
    }
}

export default Movie