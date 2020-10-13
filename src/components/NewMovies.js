import React from 'react';
import Movie from './Movie';
import MovieGrid from './MovieGrid'

class NewMovies extends React.Component {
  render() {
    return (
      <MovieGrid gridType="is-movies" title="أحدث الأفلام ">
        <Movie title={this.props.movies[16].originalTitle} image={this.props.movies[16].posterPath} />
        <Movie title={this.props.movies[17].originalTitle} image={this.props.movies[17].posterPath} />
        <Movie title={this.props.movies[18].originalTitle} image={this.props.movies[18].posterPath} />
        <Movie title={this.props.movies[19].originalTitle} image={this.props.movies[19].posterPath} />
        <Movie title={this.props.movies[20].originalTitle} image={this.props.movies[20].posterPath} />
        <Movie title={this.props.movies[21].originalTitle} image={this.props.movies[21].posterPath} />
        <Movie title={this.props.movies[22].originalTitle} image={this.props.movies[22].posterPath} />
        <Movie title={this.props.movies[23].originalTitle} image={this.props.movies[23].posterPath} />
      </MovieGrid>
    );
  }
}

export default NewMovies;