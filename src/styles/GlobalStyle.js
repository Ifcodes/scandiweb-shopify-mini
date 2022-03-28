import {createGlobalStyle} from "styled-components";
import Raleway from '../public/Raleway-Regular/@font-face/raleway.css'

const GlobalStyles = createGlobalStyle` 
  @font-face {
    font-family: 'Raleway-Regular';
    src: url(${Raleway}) format("truetype");
  }

  html,body{
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: "Raleway-Regular", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
  }

  img{
    max-width: 100%;
  }

  ::-webkit-scrollbar {
    width: 2px;
    height: 0px;
    border-radius: 20px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #5ECE7B;
  }

  a{
    text-decoration: none;
  }
`
export default GlobalStyles