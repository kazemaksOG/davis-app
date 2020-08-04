import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Game extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className="mrg-top-100">
        <iframe width="95%" height="800px" frameBorder="0" src="https://jsgame-e56ba.web.app/" >
          Browser or device not compatible (try google chrome)
        </iframe>
        <Link to="/" className="center-box default-button">
        Take me back
      </Link>
      </div>
    );
  }
}

export default Game;
