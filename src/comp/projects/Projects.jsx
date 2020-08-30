import React, { Component } from 'react';
import Carousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';

import './projects.scss';
import gameImage from '../../assets/game_cover.png';
import websiteImage from '../../assets/website_cover.png';

function Projects(props) {
  const responsive = {
    0: {
      items: 1,
    },
    1070: {
      items: 2
    }
  }

  const padding = {
    paddingLeft: 0,     // in pixels
    paddingRight: 0
  }

  return (
    <div id="projects" className="projects full-display-projects">
      <div className="projects-container">
        <div className="projects-headline headline-big">
          {props.lang.projects}
        </div>
        <Carousel
          responsive={responsive}
          stagePadding={padding}
          dotsDisabled
        >
          <div className="project-wrapper" >
            <div className="headline-med proj-headline"> {props.lang.spaceship}</div>
            <div className="proj-image-holder">

              <img className="proj-image" src={gameImage} alt="default" />
            </div>
            <div className="proj-description">
              A side-scroller minigame in which the player tries to beat a pre-trained AI. The AI was trained using the magic of <a rel="noopener" target="_blank" href="https://en.wikipedia.org/wiki/Neuroevolution">Neuroevolution</a>.
              </div>
            <Link to="/game" className="default-button center-box mrg-top-20"> {props.lang.check} </Link>
          </div>

          <div className="project-wrapper" >
            <div className="headline-med proj-headline"> {props.lang.website}</div>
            <div className="proj-image-holder">

              <img className="proj-image" src={websiteImage} alt="default" />
            </div>
            <div className="proj-description">
              A website I created to showcase my programming capabilities. The web-app is based on React.js library and many more dependencies under the MIT license.
              </div>
          </div>

        </Carousel>
      </div>
    </div>
  );
}


export default Projects;
