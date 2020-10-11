import React from 'react'
import img1 from '../img/movie1.svg'

class Movie extends React.Component {
    render() {
        return (
            <li className='movie'>
                <a href='#'>
                    <img src={img1} alt='movie cover' />
                    <span className='movie-description'>The Maze Runner
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