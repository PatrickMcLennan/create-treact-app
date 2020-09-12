import React from "react";

import { fireEvent, render } from "@testing-library/react";
import { App } from "./App";
import "@testing-library/jest-dom";

test(`<App />`, () => {
  const { queryByTestId } = render(<App />);
  const [h1, button] = [queryByTestId(`h1`), queryByTestId(`button`)];
  expect(h1.textContent).toBe(`Hello World!`);
  expect(button.textContent).toBe(`0`);
  fireEvent.click(button);
  expect(button.textContent).toBe(`1`);
});
