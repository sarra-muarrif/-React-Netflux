import React from 'react'

class Movie extends React.Component {
    render() {
        const trimExtention = filename => filename.split('.')[0];
        return (
            <li className='movie'>
                <a href={`/details${trimExtention(this.props.movie.posterPath)}`}>
                    <img src={`https://image.tmdb.org/t/p/w300${this.props.movie.posterPath}`} alt={this.props.movie.originalTitle} />
                    <span className='movie-description'>{this.props.movie.originalTitle}
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