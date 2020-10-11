import React from 'react'
import Movie from './Movie'

class MovieSuggestions extends React.Component {
    render() {
        return (
            <div className='container'>
                <h3 className='section-title'>اقتراحنا لك</h3>
                <ul className='moviesGrid'>
                    <Movie />
                    <Movie />
                    <Movie />
                    <Movie />
                </ul>
            </div>

        )
    }
}

export default MovieSuggestions