import React from 'react';
import MovieGrid from './MovieGrid'
import { recentRelease } from '../utils/helper'

class NewMovies extends React.Component {
  render() {
    return (
      <MovieGrid
        gridType="is-movies"
        title="أحدث الأفلام "
        movies={recentRelease(this.props.movies, 'Film')}
        Limit={8} />
    );
  }
}

export default NewMovies;