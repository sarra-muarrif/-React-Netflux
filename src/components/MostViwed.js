import React from 'react';
import Movie from './Movie'
import MovieGrid from './MovieGrid'

class MostViwed extends React.Component {
  render() {
    return (
      <MovieGrid gridType="is-suggested" title="الأكثر مشاهدة">
        <Movie title={this.props.movies[4].originalTitle} image={this.props.movies[4].posterPath} />
        <Movie title={this.props.movies[5].originalTitle} image={this.props.movies[5].posterPath} />
        <Movie title={this.props.movies[6].originalTitle} image={this.props.movies[6].posterPath} />
        <Movie title={this.props.movies[7].originalTitle} image={this.props.movies[7].posterPath} />
      </MovieGrid>
    );
  }
}

export default MostViwed;