import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Textbox } from "./textbox";

test("renders textbox", () => {
  render(<Textbox />);
  const textboxElement = screen.getByRole("textbox");
  expect(textboxElement).toBeInTheDocument();
});
