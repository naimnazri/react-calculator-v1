import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { test, expect } from "vitest";
import App from "./App";

test("renders calculator", () => {
  render(<App />);
  expect(screen.getByTestId("calculator")).toBeInTheDocument();
});
