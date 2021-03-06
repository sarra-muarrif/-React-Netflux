import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import DetailsPage from './pages/DetailsPage'
import SearchPage from './pages/SearchPage'

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
                  <CategoryPage {...props}
                    type="Film"
                    typeText="أفلام"
                    optionText="نوع الفلم"
                    movies={this.state.movies} />
                );
              }} />
              <Route exact path='/shows' render={props => {
                return (
                  <CategoryPage {...props}
                    type="Shows"
                    typeText="المسلسلات"
                    optionText="نوع المسلسل"
                    movies={this.state.movies} />
                );
              }} />
              <Route exact path='/details/:id' render={(props) =>
                (<DetailsPage {...props}
                  movies={this.state.movies} />)}
              />
              <Route exact path='/search/:keyword' render={(props) =>
                (<SearchPage {...props}
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
