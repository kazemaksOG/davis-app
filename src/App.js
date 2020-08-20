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
  check: 'Check out',
  personal: 'Personal information',
  personal_text: 'My name is Dāvis Kažemaks. I am from Latvia and at the time of making this I’m 19 years old. I have been a problem solver since primary school and I believe that software engineering is my next step in my problem-solving journey.',
  edu: 'Education',
  exp: 'Experience',
  website:'This Website',
  spaceship:'AI Spaceship Race',


};

const nl = {
  welcome: "Welkom.",
  lang_switch:'en',
  my_name: 'Mijn naam is Dāvis Kažemaks',
  this_is: 'En dit is mijn website',
  about: 'Over mij',
  projects: 'Projecten',
  check: 'Uitchecken',
  personal: 'Persoonlijke informatie',
  personal_text: '(Sorry my Dutch is not that great yet) My name is Dāvis Kažemaks. I am from Latvia and at the time of making this I’m 19 years old. I have been a problem solver since primary school and I believe that software engineering is my next step in my problem-solving journey.',
  edu: 'Opleiding',
  exp: 'Ervaring',
  website:'Deze Website',
  spaceship:'KI Ruimteschip Race',

};


function App() {
  let defTheme = 'dark';
  let defLang = 'en';

  sessionStorage.getItem('davisTheme') == 'light' ? defTheme = 'light' : defTheme = 'dark';
  const [theme, setTheme] = useState(defTheme);
  const themeTog = () => {
    if(theme === 'light') {
      setTheme('dark');
      sessionStorage.setItem('davisTheme','dark')
    } else {
      setTheme('light');
      sessionStorage.setItem('davisTheme','light');
    }

    
  }

  sessionStorage.getItem('davisLang') == 'nl' ? defLang = 'nl' : defLang = 'en';
  const [lang, setLang] = useState(defLang);
  const langTog = () => {

    if(lang === 'en') {
      setLang('nl');
      sessionStorage.setItem('davisLang','nl')
    } else {
      setLang('en');
      sessionStorage.setItem('davisLang','en');
    }
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
