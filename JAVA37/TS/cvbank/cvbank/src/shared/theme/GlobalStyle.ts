import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    body, html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    #app {
      width: 100%;
      height: 100%;
    }

    * {
        font-family: 'Montserrat', sans-serif;
        box-sizing: border-box;
    }

    button {
      background-color: unset;
      border: none;
      padding: 0;
    }

    button:hover {
      cursor: pointer;
    }

    textarea::placeholder {
      color: rgba(10, 33, 56, 0.5);  
    }

    input::placeholder {
      color: rgba(10, 33, 56, 0.5);  
    }

    a{
      text-decoration: none;
    }
`;

export default GlobalStyle;
