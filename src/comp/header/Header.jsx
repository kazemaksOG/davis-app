import React from 'react';
import './header_dark.scss';
import PropTypes from 'prop-types';

// Assets
import logo_dark_theme from '../../assets/white_dk_logo.svg';
import logo_light_theme from '../../assets/black_dk_logo.svg';
import switch_dark_theme from '../../assets/white_switch.svg';
import switch_light_theme from '../../assets/black_switch.svg'



function Header(props) {
  return (
    <div className="header">
      <div className="logo-sec" >
        <a href="#intro">
          <img className="logo-dk" src={props.theme === "dark" ? logo_dark_theme : logo_light_theme} alt="logo" />
        </a>
      </div>

      <div className="option-sec">
        <button className="lang-switch rem-2" onClick={props.langTog} > {props.lang.lang_switch} </button>
        <img className="light-switch" onClick={props.themeTog} src={props.theme === "dark" ? switch_dark_theme : switch_light_theme} alt="light switch" />
      </div>

    </div>
  );
}

Header.propTypes = {
  lang: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  themeTog: PropTypes.func.isRequired,
  langTog: PropTypes.func.isRequired,
}

export default Header;
