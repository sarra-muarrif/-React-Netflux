import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import MovieSuggestions from '../components/MovieSuggestions';
import MostViwed from '../components/MostViwed';
import NewShows from '../components/NewShows';
import NewMovies from '../components/NewMovies';
import Footer from '../components/Footer'

import data from '../data/movies.json'

class HomePage extends React.Component {
    state = {
        movies: data
    }
    render() {
        console.log(data)
        return (
            <>
                <Header />
                <Hero />
                <MovieSuggestions movies={this.state.movies} />
                <MostViwed movies={this.state.movies} />
                <NewShows movies={this.state.movies} />
                <NewMovies movies={this.state.movies} />
                <Footer />
            </>
        )
    }


}

export default HomePage;