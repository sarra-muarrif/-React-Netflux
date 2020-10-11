import React from 'react';
import Movie from './Movie';

class NewShows extends React.Component {
  render() {
    return (
      <section className="section movies slider has-arrows is-movies">
        <div className="container">
          <h3 className="section-title">أحدث المسلسلات</h3>
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

export default NewShows;