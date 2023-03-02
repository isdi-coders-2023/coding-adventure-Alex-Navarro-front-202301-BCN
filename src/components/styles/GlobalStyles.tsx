import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`



#root {
  width: 100%;
  margin: 1.5rem;
}

*, ::after, ::before {
  box-sizing: border-box;
}


body {
  margin: 0;
  background-color: var(--primary-color);
  height: 100vh;
  display: flex;
}

  a, a:active, a:visited {
    color: inherit;
    text-decoration: none;
  }

h1,h2{
  padding: 0;
  margin: 0;
}

ol, ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
  text-decoration: none;
}

button, input {
  font-family: inherit;
  font-size:inherit;
  border: none;
}
  
button {
  background-color: transparent;
  cursor: pointer;
}

`;

export default GlobalStyles;
