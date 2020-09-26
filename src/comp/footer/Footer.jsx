import React from 'react';
import './footer.scss';
import PropTypes from 'prop-types';

// Assets
import whiteGit from '../../assets/white_github.png';
import blackGit from '../../assets/black_github.png';
import whiteFacebook from '../../assets/white_facebook.png';
import blackFacebook from '../../assets/black_facebook.png';


function Footer(props) {
    return (
      <div className="footer-container">
        <a className="link-git" rel="noopener noreferrer" target="_blank" href="https://github.com/kazemaksOG">
          <img className="git-img" src={props.theme == "dark" ? whiteGit : blackGit} alt="default" />
        </a>

        <a className="link-git" rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/davis.kazemaks">
          <img className="git-img" src={props.theme == "dark" ? whiteFacebook : blackFacebook} alt="default" />
        </a>
      </div>
    );
  }

// Prop types
Footer.propTypes = {
  theme: PropTypes.string.isRequired,
}
 

export default Footer;
