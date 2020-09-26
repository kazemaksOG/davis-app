import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Theme controller
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './themes/GlobalStyle';
import { light, dark } from './themes/Themes';

// Language
import en from './lang/eng';
import nl from './lang/nl';

// Render components
import Header from './comp/header/Header';
import Intro from './comp/intro/Intro';
import About from './comp/about/About';
import Footer from './comp/footer/Footer';
import Projects from './comp/projects/Projects';
import Game from './comp/game/Game';



function App() {

  // Theme and lang variables
  let defTheme = 'dark';
  let defLang = 'en';

  // Checks users defaults
  sessionStorage.getItem('davisTheme') == 'light' ? defTheme = 'light' : defTheme = 'dark';
  const [theme, setTheme] = useState(defTheme);

  sessionStorage.getItem('davisLang') == 'nl' ? defLang = 'nl' : defLang = 'en';
  const [lang, setLang] = useState(defLang);

  // Change theme and lang function
  const themeTog = () => {
    if(theme === 'light') {
      setTheme('dark');
      sessionStorage.setItem('davisTheme','dark')
    } else {
      setTheme('light');
      sessionStorage.setItem('davisTheme','light');
    }
  }

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
