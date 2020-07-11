import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    .header {
      
      background: ${({ theme }) => theme.header};
      transition: background 0.5s linear;
    }
    html {
      font-size:14px;
    }

  transition: background 0.5s linear, color 0.5s linear;
  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
  a {
    color: inherit;
    text-decoration: none;
  } 
  .default-button {

    transition: background 0.5s linear;

    padding:15px 30px;
    border-radius: 15px;
    border: 0.1rem solid ${({ theme }) => theme.button};
    background: ${({ theme }) => theme.background};

  }
  .default-button:hover {
    transition: all 0.5s linear;
    background-color: ${({ theme }) => theme.button};
    color: ${({ theme }) => theme.button_hover};

    
  }
  

  .type-writer {
    border-right: .3rem solid ${({ theme }) => theme.color};
  }

  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: ${({ theme }) => theme.color};}
  }



  }

`