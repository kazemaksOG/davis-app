import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';

import './projects.scss';
import default_image from '../../assets/default_img.png';

class Projects extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div id="projects"className="projects full-display">
        <div className="projects-container">
        <div className="projects-headline headline-big">
            Projects
          </div>
          <Carousel >
            <div className="project-wrapper" >
              <div className="headline-med proj-headline"> Rocket Launch (with AI)</div>
              <div className="proj-description">
                I spent my days learning and using Javascript, CSS, React, Nodejs, Git, and many other tools for creating websites. By the end of the internship, I had improved my understanding on web development and refined my work 
              </div>
              <img className="proj-image" src={default_image} alt="default" />
            </div>

            <div className="project-wrapper" >
              <div className="headline-med proj-headline"> Strength Progression App </div>
              <div className="proj-description">
                Coming soon...
              </div>
              <img className="proj-image" src={default_image} alt="default" />
            </div>

          </Carousel>
        </div>
      </div>
    );
  }
}


export default Projects;
