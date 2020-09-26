import React from 'react';
import PropTypes from 'prop-types';
import './about.scss';

// Assets
import personal from '../../assets/personal.jpg';

function About(props) {

  return (
    <div className="about full-display" id="about" >
      <div className="about-container">
        <div className="about-headline headline-big">
          {props.lang.about}
        </div>

        <div className="grid-container-about">

          <div className="grid-item-personal grid-item flex-row">
            <div className="img-container">
              <img className="personal-image" src={personal} alt="me holding a croissant" />

            </div>
            <div className="about-picture-text">
              <div className="about-grid-headline headline-med personal-headline">
                {props.lang.personal}
              </div>
              <div className="about-grid-text">
              {props.lang.personal_text}
                </div>
            </div>
          </div>

          <div className="grid-item-education grid-item">
            <div className="about-grid-headline headline-med">
              {props.lang.edu}
            </div>
            <div className="about-grid-text">
              I have attended Java programming courses during my higher secondary education years. These lessons provided me with insights on many computer science topics and upgraded my computational thinking capabilities.
              Right now I am studying at TU Delft university as a computer science student.
              </div>
          </div>

          <div className="grid-item-experience grid-item">
            <div className="about-grid-headline headline-med">
              {props.lang.exp}
            </div>
            <div className="about-grid-text">
              I received an internship as a web developer in Emergn which was provided by the SpaceTEM program. I spent my days learning and using Javascript, CSS, React, Nodejs, Git, and many other tools for creating websites. By the end of the internship, I had improved my understanding on web development and refined my work ethic.
              </div>
          </div>

        </div>

      </div>
    </div>
  );
}

About.propTypes = {
  lang: PropTypes.string.isRequired,
}

export default About;
