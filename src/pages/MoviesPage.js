import React from 'react'

import Filter from '../components/Filter'
import MovieGrid from '../components/MovieGrid'
import { suggestions, mostViwed, recentRelease } from '../utils/helper'

class MoviesPage extends React.Component {
    render() {
        return (
            <>
                <Filter filterType='فلم' filterName='نوع الفلم'/>
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
                    title="أحدث الأفلام "
                    movies={recentRelease(this.props.movies, 'Film')}
                    Limit={32} />
            </>
        )
    }
}

export default MoviesPage;