import React, { Component } from 'react';

import './footer.scss';
import whiteGit from '../../assets/white_github.png';
import blackGit from '../../assets/black_github.png';
import whiteFacebook from '../../assets/white_facebook.png';
import blackFacebook from '../../assets/black_facebook.png';
class Footer extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="footer-container">
        <a className="link-git" target="_blank" href="https://github.com/kazemaksOG">
          <img className="git-img" src={this.props.theme == "dark" ? whiteGit : blackGit} alt="default" />
        </a>
        <a className="link-git" target="_blank" href="https://www.facebook.com/davis.kazemaks">
          <img className="git-img" src={this.props.theme == "dark" ? whiteFacebook : blackFacebook} alt="default" />
        </a>
      </div>
    );
  }
}

export default Footer;
