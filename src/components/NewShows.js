import React from 'react';
import Movie from './Movie';
import MovieGrid from './MovieGrid'

class NewShows extends React.Component {
  render() {
    return (
      <MovieGrid gridType="is-shows" title="أحدث المسلسلات ">
        <Movie title={this.props.movies[8].title} image={this.props.movies[8].poster} />
        <Movie title={this.props.movies[9].title} image={this.props.movies[9].poster} />
        <Movie title={this.props.movies[10].title} image={this.props.movies[10].poster} />
        <Movie title={this.props.movies[11].title} image={this.props.movies[11].poster} />
        <Movie title={this.props.movies[12].title} image={this.props.movies[12].poster} />
        <Movie title={this.props.movies[13].title} image={this.props.movies[13].poster} />
        <Movie title={this.props.movies[14].title} image={this.props.movies[14].poster} />
        <Movie title={this.props.movies[15].title} image={this.props.movies[15].poster} />
      </MovieGrid>
    )
  }
}
export default NewShows;