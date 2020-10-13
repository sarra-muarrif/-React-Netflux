import React from 'react';
import Movie from './Movie';
import MovieGrid from './MovieGrid'

class NewShows extends React.Component {
  render() {
    return (
      <MovieGrid gridType="is-shows" title="أحدث المسلسلات ">
        <Movie title="The Maze Runner" image={this.props.images[0]} />
        <Movie title="Breaking Bad" image={this.props.images[1]} />
        <Movie title="Peaky Blinders" image={this.props.images[2]} />
        <Movie title="The Good Doctors" image={this.props.images[3]} />
        <Movie title="The Maze Runner" image={this.props.images[0]} />
        <Movie title="Breaking Bad" image={this.props.images[1]} />
        <Movie title="Peaky Blinders" image={this.props.images[2]} />
        <Movie title="The Good Doctors" image={this.props.images[3]} />
      </MovieGrid>
    )
  }
}
export default NewShows;