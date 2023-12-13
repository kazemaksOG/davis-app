import React from "react";
import Carousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./projects.scss";

function Projects(props) {
  // Properties for the carousel
  const responsive = {
    0: {
      items: 1,
    },
    1070: {
      items: 2,
    },
  };
  const padding = {
    paddingLeft: 0,
    paddingRight: 0,
  };

  return (
    <div id="projects" className="projects full-display-projects">
      <div className="projects-container">
        <div className="projects-headline headline-big">
          {props.lang.projects}
        </div>

        <Carousel responsive={responsive} stagePadding={padding} dotsDisabled>
          {props.lang.project_array.map((item) => (
            <div className="project-wrapper">
              <div className="headline-med proj-headline"> {item.title}</div>

              <div className="proj-image-holder">
                <img className="proj-image" src={item.image} alt="default" />
              </div>

              <div className="proj-description">{item.text}</div>
              {item.enable_external_link ? (
                <a
                  href={item.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="default-button center-box mrg-top-20"
                >
                  {item.link_text}
                </a>
              ) : (
                <div />
              )}
              {item.enable_link ? (
                <Link
                  to={item.link}
                  className="default-button center-box mrg-top-20"
                >
                  {" "}
                  {item.link_text}{" "}
                </Link>
              ) : (
                <div />
              )}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

Projects.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Projects;
