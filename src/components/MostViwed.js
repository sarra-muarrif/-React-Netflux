import React from 'react';
import Movie from './Movie'
import MovieGrid from './MovieGrid'

class MostViwed extends React.Component {
  render() {
    const sortData = this.props.movies.sort((movie1, movie2) => {
      return movie1.popularity > movie2.popularity ? -1 : 1
    });
    return (
      <MovieGrid gridType="is-suggested" title="الأكثر مشاهدة">
        <Movie title={sortData[4].originalTitle} image={sortData[4].posterPath} />
        <Movie title={sortData[5].originalTitle} image={sortData[5].posterPath} />
        <Movie title={sortData[6].originalTitle} image={sortData[6].posterPath} />
        <Movie title={sortData[7].originalTitle} image={sortData[7].posterPath} />
      </MovieGrid>
    );
  }
}

export default MostViwed;