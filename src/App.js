import React from 'react';
import HomePage from './pages/HomePage'


class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <HomePage />
        </div>
      </div>
    );
  }
}

export default App;
