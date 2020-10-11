import React from 'react';
import Movie from './Movie'

class MostViwed extends React.Component {
  render() {
    return (
      <section className="section movies slider has-arrows is-suggested">
        <div className="container">
          <h3 className="section-title">الأكثر مشاهدة</h3>
          <ul className="moviesGrid">
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

export default MostViwed;