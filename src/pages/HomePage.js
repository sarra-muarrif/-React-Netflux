import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import MovieSuggestions from '../components/MovieSuggestions';
import MostViwed from '../components/MostViwed';
import NewShows from '../components/NewShows';
import NewMovies from '../components/NewMovies';
import Footer from '../components/Footer'

import image1 from '../img/movie1.svg'
import image2 from '../img/movie2.svg'
import image3 from '../img/movie3.svg'
import image4 from '../img/movie4.svg'

const posterImages = [image1, image2, image3, image4]


class HomePage extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Hero />
                <MovieSuggestions images={posterImages} />
                <MostViwed images={posterImages} />
                <NewShows images={posterImages} />
                <NewMovies images={posterImages} />
                <Footer />
            </>
        )
    }


}

export default HomePage;