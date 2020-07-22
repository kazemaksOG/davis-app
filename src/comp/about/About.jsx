import React, { Component } from 'react';

import './about.scss';
import personal from '../../assets/personal.jpg';

class About extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="about full-display" id="about" >
        <div className="about-container">
          <div className="about-headline headline-big">
            About me
          </div>

          <div className="grid-container-about">

            <div className="grid-item-personal grid-item flex-row">
              <div className="img-container">
                <img className="personal-image" src={personal} alt="me holding a croissant" />

              </div>
              <div className="about-picture-text">
                <div className="about-grid-headline headline-med personal-headline">
                  Personal information
                </div>
                <div className="about-grid-text">
                  My name is Dāvis Kažemaks. I am from Latvia and at the time of making this I’m 19 years old. I have been a problem solver since primary school and I believe that software engineering is my next step in my problem-solving journey.
                </div>
              </div>
            </div>

            <div className="grid-item-education grid-item">
              <div className="about-grid-headline headline-med">
                Education
              </div>
              <div className="about-grid-text">
                I have attended Java programming courses during my higher secondary education years. These lessons provided me with insights on many computer science topics and upgraded my computational thinking capabilities.
                Right now I am studying at TU Delft university as a computer science student.
              </div>
            </div>

            <div className="grid-item-experience grid-item">
              <div className="about-grid-headline headline-med">
                Experience
              </div>
              <div className="about-grid-text">
                I received an internship as a web developer for 2 months in Emergn which was provided by the SpaceTEM program. I spent my days learning and using Javascript, CSS, React, Nodejs, Git, and many other tools for creating websites. By the end of the internship, I had improved my understanding on web development and refined my work ethic.
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default About;
