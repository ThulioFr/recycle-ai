import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-family:
      Inter,
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      sans-serif;

    color: #1f2933;
    background: #f4f6f4;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    min-width: 320px;
    min-height: 100vh;
    overflow-x: hidden;
    background: #f4f6f4;
    color: #1f2933;
  }

  #root {
    min-height: 100vh;
  }

  button,
  input,
  textarea {
    font: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: transparent;
  }

  img {
    display: block;
    max-width: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ::selection {
    background: rgba(47, 107, 69, 0.14);
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #edf1ed;
  }

  ::-webkit-scrollbar-thumb {
    background: #c4cec6;
    border-radius: 999px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #aeb8b0;
  }
`;