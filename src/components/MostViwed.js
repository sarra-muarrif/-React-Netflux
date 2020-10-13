import React from 'react';
import MovieGrid from './MovieGrid'
import { mostViwed } from '../utils/helper'

class MostViwed extends React.Component {
  render() {
    return (
      <MovieGrid
        gridType="is-suggested"
        title="الأكثر مشاهدة"
        movies={mostViwed([...this.props.movies])}
        Limit={4}
      />
    );
  }
}

export default MostViwed;