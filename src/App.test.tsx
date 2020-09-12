import React from "react";

import { cleanup, fireEvent, render } from "@testing-library/react";
import { App } from "./App";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

const { queryByTestId } = render(<App />);
const [h1, button] = [queryByTestId(`h1`), queryByTestId(`button`)];

afterEach(cleanup);

test(`h1`, () => {
  expect(h1.textContent).toBe(`Hello World!`);
});

test(`button`, async () => {
  expect(button.textContent).toBe(`0`);
  await act(async () => {
    fireEvent.click(button);
  });
  expect(button.textContent).toBe(`1`);
});
