import React from 'react';
import Movie from './Movie';
import MovieGrid from './MovieGrid'

class NewShows extends React.Component {
  render() {
    return (
      <MovieGrid gridType="is-shows" title="أحدث المسلسلات ">
        <Movie title={this.props.movies[0].originalTitle} image={this.props.movies[0].posterPath} />
        <Movie title={this.props.movies[1].originalTitle} image={this.props.movies[1].posterPath} />
        <Movie title={this.props.movies[2].originalTitle} image={this.props.movies[2].posterPath} />
        <Movie title={this.props.movies[3].originalTitle} image={this.props.movies[3].posterPath} />
        <Movie title={this.props.movies[0].originalTitle} image={this.props.movies[0].posterPath} />
        <Movie title={this.props.movies[1].originalTitle} image={this.props.movies[1].posterPath} />
        <Movie title={this.props.movies[2].originalTitle} image={this.props.movies[2].posterPath} />
        <Movie title={this.props.movies[3].originalTitle} image={this.props.movies[3].posterPath} />
      </MovieGrid>
    )
  }
}
export default NewShows;