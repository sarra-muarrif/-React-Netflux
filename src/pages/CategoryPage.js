import React from 'react'

import Filter from '../components/Filter'
import MovieGrid from '../components/MovieGrid'
import { suggestions, mostViwed, recentRelease } from '../utils/helper'

class CategoryPage extends React.Component {
    state = {
        filter: null
    }

    onFilter = value => {
        this.setState({ filter: value })
    }

    renderMovieGrid = () => {
        return (
            <>
                <MovieGrid
                    gridType="is-suggested"
                    title="اقتراحنا لك"
                    movies={suggestions(this.props.movies)}
                    Limit={4} />
                <MovieGrid
                    gridType="is-mostViwed"
                    title="الأكثر مشاهدة"
                    movies={mostViwed(this.props.movies)}
                    Limit={4}
                />
                <MovieGrid
                    gridType="is-newMovies"
                    title={`أحدث${this.props.typeText}`}
                    movies={recentRelease(this.props.movies, 'Film')}
                    Limit={32} />
            </>
        )
    }

    renderFilterResult = () => {
        const filterMovie = this.props.movies.filter(movie => {
            return movie.genres.includes(this.state.filter)
        })
        return (
            <MovieGrid
                gridType='is-suggest'
                title={this.state.filter}
                movies={filterMovie}
            />
        )
    }

    render() {
        return (
            <>
                <Filter
                    filterType={this.props.typeText}
                    filterName={this.props.optionText}
                    onSelectChange={this.onFilter} />
                {this.state.filter ? this.renderFilterResult() : this.renderMovieGrid()}
            </>
        )
    }
}

export default CategoryPage;