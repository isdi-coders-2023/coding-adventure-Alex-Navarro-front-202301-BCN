import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "@fontsource/saira-stencil-one";
import "@fontsource/roboto";
import GlobalStyles from "./components/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./components/styles/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
