import React, { Component } from 'react';

class ScrollButtons extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="scroll-buttons">
        <a href="#intro">Intro</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
      </div>
    );
  }
}

export default ScrollButtons;
