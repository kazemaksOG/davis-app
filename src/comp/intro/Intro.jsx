import React from 'react';
import { useState } from 'react';
import Spacer from 'react-add-space';
import './intro.scss';
import PropTypes from 'prop-types';

// Assets
import light_theme_replay from '../../assets/black_replay.png';
import dark_theme_replay from '../../assets/white_replay.png';


function Intro(props) {
  const [render, setRender] = useState(true);

  // Restarts the animation
  const restart = () => {
    setRender(false);
    setTimeout(function () { setRender(true); }, 10);

  }
  
  // Renders the animation
  const renderAnimation = () => {
    if (render) {
      return (
        <React.Fragment>
          <div className="restart-button">
            <img className="img-button" src={props.theme === "dark" ? dark_theme_replay : light_theme_replay} onClick={() => restart()} alt="restart" />
          </div>

          <div className="type-writer">
            {props.lang.welcome === "Welcome." ? "" : <Spacer amount={1} />}{props.lang.welcome}
          </div>

          <div className="intro-text-1">
            {props.lang.my_name}
          </div>

          <div className="intro-text-2">
            {props.lang.this_is}
          </div>

          <div className="button-holder">
            <a href="#about" className="go-about default-button">
              {props.lang.about}
            </a>

            <a href="#projects" className="go-projects default-button">
              {props.lang.projects}
            </a>
          </div>
        </React.Fragment>
      )
    }
  }

  // Main functions return statement
  return (
    <div className="intro full-display-intro">
      <div id="intro" className="intro-container">
        {renderAnimation()}
      </div>
    </div>
  );
}

Intro.propTypes = {
  theme: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
}

export default Intro;
