import React from 'react'
import Movie from './Movie'
import MovieGrid from './MovieGrid'

class MovieSuggestions extends React.Component {
    render() {
        return (
            <MovieGrid gridType="is-suggested" title="اقتراحنا لك">
                <Movie title={this.props.movies[0].title} image={this.props.movies[0].poster} />
                <Movie title={this.props.movies[1].title} image={this.props.movies[1].poster} />
                <Movie title={this.props.movies[2].title} image={this.props.movies[2].poster} />
                <Movie title={this.props.movies[3].title} image={this.props.movies[3].poster} />
            </MovieGrid>
        )
    }
}

export default MovieSuggestions