import React from 'react';
import Movie from './Movie';

class NewMovies extends React.Component {
  render() {
    return (
      <section className="section movies slider has-arrows is-movies">
        <div className="container">
          <h3 className="section-title">أحدث الأفلام</h3>
          <ul className="moviesGrid">
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
          </ul>
        </div>
      </section>
    );
  }
}

export default NewMovies;