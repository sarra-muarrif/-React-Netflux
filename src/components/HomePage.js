import React from 'react'
import Header from './Header'
import Hero from './Hero'
import MoveSuggestions from './MovieSuggestions'

class HomePage extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Hero />
                <MoveSuggestions />
            </>
        )
    }


}

export default HomePage;