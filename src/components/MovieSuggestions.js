import React from 'react'
import MovieGrid from './MovieGrid'
import { suggestions } from '../utils/helper'
class MovieSuggestions extends React.Component {
    render() {
        return (
            <MovieGrid
                gridType="is-suggested"
                title="اقتراحنا لك"
                movies={suggestions(this.props.movies)}
                Limit={4} />
        )
    }
}

export default MovieSuggestions