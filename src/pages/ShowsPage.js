import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Filter from '../components/Filter'
import MovieGrid from '../components/MovieGrid'
import { suggestions, mostViwed, recentRelease } from '../utils/helper'

class ShowsPage extends React.Component {
    render() {
        return (
            <>
                <Filter filterType='نوع المسلسل ' filterName=' المسلسل' />
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

export default ShowsPage;