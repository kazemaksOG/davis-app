import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useLocation} from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './themes/GlobalStyle';
import { light, dark } from './themes/Themes';


import Header from './comp/header/Header';
import Intro from './comp/intro/Intro';
import About from './comp/about/About';
import Footer from './comp/footer/Footer';
import Projects from './comp/projects/Projects';
import Game from './comp/game/Game';

const en = {
  welcome: 'Welcome.',
  lang_switch:'nl',
  my_name: 'My name is Dāvis Kažemaks',
  this_is: 'And this is my website',
  about: 'About me',
  projects: 'Projects',


};

const nl = {
  welcome: "Welkom.",
  lang_switch:'en',
  my_name: 'My name is Dāvis Kažemaks',
  this_is: 'And this is my website',
  about: 'About me',
  projects: 'Projects',


};


function App() {

  const [theme, setTheme] = useState('dark');
  const themeTog = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  const [lang, setLang] = useState('en');
  const langTog = () => {
    lang === 'en' ? setLang('nl') : setLang('en');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark} >
      <GlobalStyles />
      <Router>


      <Header theme={theme} themeTog={themeTog} lang={lang === 'en' ? en : nl} langTog={langTog} />
          
        <Switch>
          <Route exact path="/">
            <Intro theme={theme} lang={lang === 'en' ? en : nl} />
            <About lang={lang === 'en' ? en : nl} />
            <Projects lang={lang === 'en' ? en : nl} />
          </Route>

          <Route exact path="/game">
            <Game />
          </Route>

          <Route component={notFound}/>
        </Switch>

      <Footer theme={theme} />


      </Router>
    </ThemeProvider>

  );
}



const notFound = () => {
  return(
    <div className="intro-container">
      <div className=" center-box mrg-top-100 rem-25">How did you get here?</div>
    </div>
  );
}

export default App;
