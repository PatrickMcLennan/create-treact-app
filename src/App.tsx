import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles/resets.style";

import "./styles/test.scss";

export function App(): JSX.Element {
  const [state, setState] = useState(0);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="css-test">
          <h1 data-testid="h1">Hello World!</h1>
          <button data-testid="button" onClick={() => setState((prevState) => (prevState += 1))}>
            {state}
          </button>
        </div>
      </ThemeProvider>
    </>
  );
}
