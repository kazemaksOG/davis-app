import React from 'react';
import { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './themes/GlobalStyle';
import { light, dark } from './themes/Themes';


import Header from './comp/header/Header';
import Intro from './comp/intro/Intro';
import About from './comp/about/About';
import Projects from './comp/projects/Projects';

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
      <Header theme={theme} themeTog={themeTog} lang={lang === 'en' ? en : nl} langTog={langTog} />

      <Intro theme={theme} lang={lang === 'en' ? en : nl} />
      <About lang={lang === 'en' ? en : nl} />
      <Projects lang={lang === 'en' ? en : nl} />

    </ThemeProvider>

  );
}

export default App;
