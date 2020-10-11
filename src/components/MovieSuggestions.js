import React from 'react'
import img1 from '../img/movie1.svg'
import img2 from '../img/movie2.svg'
import img3 from '../img/movie3.svg'
import img4 from '../img/movie4.svg'

class MovieSuggestions extends React.Component {
    render() {
        return (
            <div className='container'>
                <h3 className='section-title'>اقتراحنا لك</h3>
                <ul className='moviesGrid'>
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
                    <li className='movie'>
                        <a href='#'>
                            <img src={img2} alt='movie cover' />
                            <span className='movie-description'>Breaking Bad
                            <span className='play-icon'>
                                    <i className='fas fa-play'></i>
                                </span>
                            </span>
                        </a>
                    </li>
                    <li className='movie'>
                        <a href='#'>
                            <img src={img3} alt='movie cover' />
                            <span className='movie-description'>Peaky Blenders
                            <span className='play-icon'>
                                    <i className='fas fa-play'></i>
                                </span>
                            </span>
                        </a>
                    </li>
                    <li className='movie'>
                        <a href='#'>
                            <img src={img4} alt='movie cover' />
                            <span className='movie-description'>The Good Doctor
                            <span className='play-icon'>
                                    <i className='fas fa-play'></i>
                                </span>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>

        )
    }
}

export default MovieSuggestions