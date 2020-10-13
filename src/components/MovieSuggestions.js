import React from 'react'
import Movie from './Movie'
import MovieGrid from './MovieGrid'

class MovieSuggestions extends React.Component {
    render() {
        const filterData = this.props.movies.filter((movie) => {
            return movie.voteAverage >= 8
        })
        console.log(filterData)
        return (
            <MovieGrid gridType="is-suggested" title="اقتراحنا لك">
                <Movie title={filterData[0].originalTitle} image={filterData[0].posterPath} />
                <Movie title={filterData[1].originalTitle} image={filterData[1].posterPath} />
                <Movie title={filterData[2].originalTitle} image={filterData[2].posterPath} />
                <Movie title={filterData[3].originalTitle} image={filterData[3].posterPath} />
            </MovieGrid>
        )
    }
}

export default MovieSuggestions