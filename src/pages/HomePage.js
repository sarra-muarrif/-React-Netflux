import React from 'react'

import Hero from '../components/Hero'
import MovieGrid from '../components/MovieGrid'
import { suggestions, recentRelease, mostViwed } from '../utils/helper'

class HomePage extends React.Component {
    render() {
        return (
            <>
                <Hero />
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
                    Limit={8} />
                <MovieGrid
                    gridType="is-newShows"
                    title="أحدث المسلسلات "
                    movies={recentRelease(this.props.movies, 'Film')}
                    Limit={8}
                />
            </>
        )
    }


}

export default HomePage;