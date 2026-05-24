import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter, sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: #f5f7f5;
    color: #1c2b22;
    min-height: 100vh;
    overflow-x: hidden;
  }

  #root {
    min-height: 100vh;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button,
  input,
  textarea {
    font-family: Inter, sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
    transition: 0.2s;
  }

  ::selection {
    background: #22c55e40;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #edf2ed;
  }

  ::-webkit-scrollbar-thumb {
    background: #a7c9ad;
    border-radius: 999px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #7db686;
  }
`;