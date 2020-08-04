import React, { Component } from 'react';

import './footer.scss';
import whiteGit from '../../assets/white_github.png';
import blackGit from '../../assets/black_github.png';

class Footer extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="footer-container">
        <a target="_blank" href="https://github.com/kazemaksOG">
          <img className="" src={this.props.theme == "dark" ? whiteGit : blackGit} alt="default" />
        </a>
      </div>
    );
  }
}

export default Footer;
