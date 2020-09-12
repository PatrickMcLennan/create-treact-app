import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles/resets.style";

import "./test.scss";

export function App(): JSX.Element {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="css-test">
          <h1>Hello World</h1>
        </div>
      </ThemeProvider>
    </>
  );
}
