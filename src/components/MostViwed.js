import React from 'react';
import Movie from './Movie'

class MostViwed extends React.Component {
  render() {
    return (
      <section className="section movies slider has-arrows is-suggested">
        <div className="container">
          <h3 className="section-title">الأكثر مشاهدة</h3>
          <ul className="moviesGrid">
            <Movie title="The Maze Runner" image={this.props.images[0]} />
            <Movie title="Breaking Bad" image={this.props.images[1]} />
            <Movie title="Peaky Blinders" image={this.props.images[2]} />
            <Movie title="The Good Doctors" image={this.props.images[3]} />
          </ul>
        </div>
      </section>
    );
  }
}

export default MostViwed;