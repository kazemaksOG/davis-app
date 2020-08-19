import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    .header {
      
      background: ${({ theme }) => theme.header};
      transition: background 0.5s ease;
    }
    html {
      font-size:14px;
    }

    transition:all 500ms ease;
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
    text-decoration: underline;
  } 

  .alice-carousel__prev-btn-item {
    color: ${({ theme }) => theme.color};
    transition: color 0.5s ease;
  }
  .alice-carousel__next-btn-item {
    color: ${({ theme }) => theme.color};
    transition: color 0.5s ease;
  }
  
  .project-wrapper {

    background-color: ${({ theme }) => theme.project_background};
    box-shadow: ${({ theme }) => theme.shadow};
    transition: box-shadow 0.5s ease, background 0.5s ease;

    .default-button {
      transition: background 0s ease;
    }

    .default-button:hover {
      transition: background 0.5s ease;
    }
  }

  .default-button {
    text-decoration:none;
    padding:15px 30px;
    border-radius: 15px;
    border: 0.1rem solid ${({ theme }) => theme.button};
    background: inherit;
    transition: background 0.5s ease;
    transition-delay: 0s;
  }
  .default-button:hover {
    background-color: ${({ theme }) => theme.button};
    color: ${({ theme }) => theme.button_hover};
  }


  .grid-item {
  
    background-color: ${({ theme }) => theme.grid_item};
    box-shadow: ${({ theme }) => theme.shadow};
    -moz-box-shadow: ${({ theme }) => theme.shadow};
    -webkit-box-shadow: ${({ theme }) => theme.shadow};
    transition: background 0.5s ease, box-shadow 0.5s ease;

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