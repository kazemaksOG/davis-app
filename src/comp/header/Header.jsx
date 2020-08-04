import React, { Component } from 'react';

import './assets/header_dark.scss';
import logo_dark_theme from '../../assets/white_dk_logo.svg';
import logo_light_theme from '../../assets/black_dk_logo.svg';
import switch_dark_theme from '../../assets/white_switch.svg';
import switch_light_theme from '../../assets/black_switch.svg'



class Header extends Component {
  render() {

    return (
      <div className="header">
        <div className="logo-sec" >
          <a href="#intro">
            <img className="logo-dk" src={this.props.theme === "dark" ? logo_dark_theme : logo_light_theme} alt="logo" />
          </a>
        </div>

        <div className="option-sec">
          <button className="lang-switch rem-2" onClick={this.props.langTog} > {this.props.lang.lang_switch} </button>

          <img className="light-switch" onClick={this.props.themeTog} src={this.props.theme === "dark" ? switch_dark_theme : switch_light_theme} alt="light switch" />
        </div>

      </div>
    );
  }
}

export default Header;
