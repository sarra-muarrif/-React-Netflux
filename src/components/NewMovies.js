import React from 'react';
import Movie from './Movie';
import MovieGrid from './MovieGrid'

class NewMovies extends React.Component {
  render() {
    const filterMovies = this.props.movies.filter(movie => {
      return movie.category === "Film"
    })
    const sortFilterMovies = filterMovies.sort((movie1, movie2) => {
      return new Date(movie1.releaseDate) > new Date(movie2.releaseDate) ? -1 : 1
    })
    console.log(filterMovies, 22)
    console.log(sortFilterMovies, 22)
    return (
      <MovieGrid gridType="is-movies" title="أحدث الأفلام " >
        <Movie title={sortFilterMovies[16].originalTitle} image={sortFilterMovies[16].posterPath} />
        <Movie title={sortFilterMovies[17].originalTitle} image={sortFilterMovies[17].posterPath} />
        <Movie title={sortFilterMovies[18].originalTitle} image={sortFilterMovies[18].posterPath} />
        <Movie title={sortFilterMovies[19].originalTitle} image={sortFilterMovies[19].posterPath} />
        <Movie title={sortFilterMovies[20].originalTitle} image={sortFilterMovies[20].posterPath} />
        <Movie title={sortFilterMovies[21].originalTitle} image={sortFilterMovies[21].posterPath} />
        <Movie title={sortFilterMovies[22].originalTitle} image={sortFilterMovies[22].posterPath} />
        <Movie title={sortFilterMovies[23].originalTitle} image={sortFilterMovies[23].posterPath} />
      </MovieGrid>
    );
  }
}

export default NewMovies;