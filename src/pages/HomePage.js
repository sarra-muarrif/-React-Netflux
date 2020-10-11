import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import MovieSuggestions from '../components/MovieSuggestions';
import MostViwed from '../components/MostViwed';
import NewShows from '../components/NewShows';
import NewMovies from '../components/NewMovies';

class HomePage extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Hero />
                <MovieSuggestions />
                <MostViwed />
                <NewShows />
                <NewMovies />
            </>
        )
    }


}

export default HomePage;