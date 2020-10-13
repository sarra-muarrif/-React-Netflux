import React from 'react';
import MovieGrid from './MovieGrid'
import { recentRelease } from '../utils/helper'

class NewShows extends React.Component {
  render() {
    return (
      <MovieGrid
        gridType="is-movies"
        title="أحدث المسلسلات "
        movies={recentRelease(this.props.movies, 'Film')}
        Limit={8}
      />
    );
  }
}
export default NewShows;