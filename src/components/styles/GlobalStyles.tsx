import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --primary-font: "Roboto";
  --secondary-font: "Saira Stencil One";

  --primary-color:#1E1E1E;
  --secondary-color: #CCCF18;
}

*, ::after, ::before {
  box-sizing: border-box;
}


body {
  padding: 1.5rem;
  background-color: var(--primary-color);
  width: 100%;
  min-height: 100vh;
}

a{
  text-decoration: none;
  color: inherit;
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
