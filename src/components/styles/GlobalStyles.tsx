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
  padding: 30px;
  background-color: #fff;
  width: 100%;
  min-height: 100vh;
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

button{
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: inherit;
}

`;

export default GlobalStyles;
