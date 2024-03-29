import React from "react";
import PropTypes from "prop-types";
import "./about.scss";

// Assets
import personal from "../../assets/personal.jpg";

function About(props) {
  return (
    <div className="about full-display" id="about">
      <div className="about-container">
        <div className="about-headline headline-big">{props.lang.about}</div>

        <div className="grid-container-about">
          <div className="grid-item-personal grid-item flex-row">
            <div className="img-container">
              <img
                className="personal-image"
                src={personal}
                alt="me holding a croissant"
              />
            </div>

            <div className="about-picture-text">
              <div className="about-grid-headline headline-med edu-headline">
                {props.lang.personal}
              </div>

              <div className="about-grid-text">{props.lang.personal_text}</div>
            </div>
          </div>

          <div className="grid-item-education grid-item">
            <div className="about-grid-headline headline-med">
              {props.lang.exp}
            </div>

            <div className="about-grid-text">{props.lang.exp_text}</div>
          </div>

          <div className="grid-item-experience grid-item">
            <div className="about-grid-headline headline-med personal-headline">
              {props.lang.edu}
            </div>

            <div className="about-grid-text">{props.lang.edu_text}</div>
          </div>
        </div>
      </div>
      <a href="#projects" className="default-button center-box mrg-top-10">
        {props.lang.projects}
      </a>
    </div>
  );
}

About.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default About;
