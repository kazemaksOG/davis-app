import React from 'react';
import { useState } from 'react';
import './intro.scss';
import light_theme_replay from '../../assets/black_replay.png';
import dark_theme_replay from '../../assets/white_replay.png';


function Intro(props) {

  const [render, setRender] = useState(true);

  const renderAnimation = () => {
    if (render) {
      return (
        <React.Fragment>
          <div className="restart-button">
            <img className="img-button" src={props.theme === "dark" ? dark_theme_replay : light_theme_replay} onClick={() => restart()} />
          </div>

          <div className="type-writer">
            {props.lang.welcome}
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
  const restart = () => {
    setRender(false);
    setTimeout(function () { setRender(true); }, 10);

  }

  return (
    <div className="intro full-display">

      <div className="intro-container">
        {renderAnimation()}
      </div>

    </div>
  );
}

export default Intro;
