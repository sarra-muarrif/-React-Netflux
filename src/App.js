import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import MoviesPage from './pages/MoviesPage'
import ShowsPage from './pages/ShowsPage'
import DetailsPage from './pages/DetailsPage'

import data from './data/movies.json'

class App extends React.Component {
  state = {
    movies: data
  }
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <div className="container">
            <Header />
            <>
              <Route exact path='/' render={props => {
                return (
                  <HomePage {...props} movies={this.state.movies} />
                );
              }} />
              <Route exact path='/movies' render={props => {
                return (
                  <MoviesPage movies={this.state.movies} />
                );
              }} />
              <Route exact path='/shows' render={props => {
                return (
                  <ShowsPage movies={this.state.movies} />
                );
              }} />
              <Route exact path='/details/:id' render={(props) =>
                (<DetailsPage {...props}
                 movies={this.state.movies} />)}
              />
            </>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
