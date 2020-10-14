import React from 'react'
import Movie from './Movie'

const MovieGrid = props => {
    const movies = props.movies.slice(0, props.Limit)
    const movieList = movies.map(movie => {
        return <Movie movie={movie} key={movie.posterPath} />
    })
    return (
        <section className={`section movies slider has-arrows ${props.gridType}`}>  <div className='container'>
            <h3 className='section-title'>{props.title}</h3>
            <ul className='moviesGrid'>
                {movieList}
            </ul>
        </div>
        </section>
    )
}


export default MovieGrid