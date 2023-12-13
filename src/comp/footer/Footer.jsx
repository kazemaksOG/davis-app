import React from "react";
import "./footer.scss";
import PropTypes from "prop-types";

// Assets
import whiteGit from "../../assets/white_github.png";
import blackGit from "../../assets/black_github.png";
import whiteFacebook from "../../assets/white_facebook.png";
import blackFacebook from "../../assets/black_facebook.png";

import whiteLinkedin from "../../assets/white_linked.svg";
import blackLinkedin from "../../assets/black_linked.svg";

function Footer(props) {
  return <div className="footer-container">{renderIcons(props)}</div>;
}

// Renders the icons
const renderIcons = (props) => {
  return mappingInfo.map((item) => (
    <a
      key={item.id}
      className="link-git"
      rel="noopener noreferrer"
      target="_blank"
      href={item.link}
    >
      <img
        className="git-img"
        src={props.theme === "dark" ? item.white : item.black}
        alt="default"
      />
    </a>
  ));
};

const mappingInfo = [
  {
    id: "git",
    white: whiteGit,
    black: blackGit,
    link: "https://github.com/kazemaksOG",
  },
  {
    id: "facebook",
    white: whiteFacebook,
    black: blackFacebook,
    link: "https://www.facebook.com/davis.kazemaks",
  },
  {
    id: "linkedin",
    white: whiteLinkedin,
    black: blackLinkedin,
    link: "https://www.linkedin.com/in/dāvis-kažemaks-386646196",
  },
];

// Prop types
Footer.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Footer;
